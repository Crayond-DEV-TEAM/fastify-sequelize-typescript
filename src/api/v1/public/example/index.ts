import { FastifyPluginAsync } from "fastify";
import { schema } from "./schema";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", schema, async function (request: any, reply) {
    return reply.send({});
  });
};

export default example;
