import fp from "fastify-plugin";
import fastifyEnv, { FastifyEnvOptions } from "@fastify/env";

// Define the schema for the environment variables
const schema = {
  type: "object",
  required: [
    "DB_NAME",
    "DB_USERNAME",
    "DB_PASSWORD",
    "DB_PORT",
    "DB_HOST",
    "DB_DIALECT",
  ],
  properties: {
    DB_NAME: { type: "string" },
    DB_USERNAME: { type: "string" },
    DB_PASSWORD: { type: "string" },
    DB_PORT: { type: "string" },
    DB_HOST: { type: "string" },
    DB_DIALECT: { type: "string" },
  },
} as const;

const options = {
  confKey: "config", // optional, default: 'config'
  schema: schema,
  dotenv: true,
};

export default fp<FastifyEnvOptions>(async (fastify) => {
  fastify.register(fastifyEnv, options);
});
