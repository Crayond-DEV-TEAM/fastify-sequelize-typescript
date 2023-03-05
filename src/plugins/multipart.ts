import { fastifyMultipart } from "@fastify/multipart";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
  fastify.register(fastifyMultipart);
});
