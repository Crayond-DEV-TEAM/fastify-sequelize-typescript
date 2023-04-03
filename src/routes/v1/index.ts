import { FastifyInstance } from "fastify";
import { readdirSync } from "fs";
import { join } from "path";

const routesLoader = (fastify: FastifyInstance, sourceDir: string) => {
  readdirSync(sourceDir, { withFileTypes: true })
    .filter((dirent: any) => dirent.isDirectory())
    .map((item: any) => item.name)
    .forEach(async (item: string) => {
      let route: any = await import(`${sourceDir}/${item}`);
      fastify.register(route.default, { prefix: `/api/v1/${item}` });
    });
};

const routes = (fastify: FastifyInstance, _: any, done: any) => {
  //Routes of Public API
  routesLoader(fastify, join(__dirname, "public"));
  //Routes of Private API
  routesLoader(fastify, join(__dirname, "private"));

  done();
};

export default routes;
