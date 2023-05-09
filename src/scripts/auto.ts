import { Sequelize } from "sequelize";
import { AutoOptions, SequelizeAuto } from "sequelize-auto";
import { config } from "dotenv";
config({ path: ".env" });
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT }: any =
  process.env;

async function main() {
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

  const autoOptions: AutoOptions = {
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    directory: "./src/models",
    additional: {
      timestamps: false,
    },
    noAlias: false,
    singularize: true,
    useDefine: false,
    lang: "ts",
    skipTables: ["_prisma_migrations", "knex_migration"],
  };
  const auto = new SequelizeAuto(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    autoOptions
  );
  await auto.run();
}

main();
