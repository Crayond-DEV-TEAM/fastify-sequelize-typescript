import { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["Example"],
      },
    },
    async function (request: any, reply) {
      return reply.send({
        message: "Good To GO 🥳! ",
      });
    }
  );
};

export default example;
