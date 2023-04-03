import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["EXAMPLE"],
      },
    },
    async function (request: any, reply) {
      return reply.send({});
    }
  );
};

export default example;
