import { FastifyPluginAsync } from "fastify";
import { schema } from "./schema";
const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", schema, async function (request: any, reply) {
    return reply.send({});
  });
};

export default auth;
