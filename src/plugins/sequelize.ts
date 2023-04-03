import { FastifyPluginCallback } from "fastify";
import { Sequelize } from "sequelize";
import fp from "fastify-plugin";
import { initModels } from "../models/init-models";

interface SequelizeOptions {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: string;
  port: number;
}

declare module "fastify" {
  interface FastifyInstance {
    sequelize: Sequelize;
  }
}

const sequelizePlugin: FastifyPluginCallback<SequelizeOptions> = async (
  fastify: any,
  options
) => {
  const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_DIALECT } =
    fastify.config;

  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    logging: false,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  initModels(sequelize);
  fastify.decorate("sequelize", sequelize);
};

export default fp(sequelizePlugin);
