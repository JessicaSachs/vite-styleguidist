import { readFile } from "fs";
import { join } from "path";
import { promisify } from "util";
import { ServerPluginContext } from "vite";

const read = promisify(readFile);

export const styleguidist = ({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher, // chokidar file watcher instance
}: ServerPluginContext) => {
  app.use(async (ctx, next) => {
    if (!ctx.path.endsWith(".guidist")) {
      return next();
    }

    const query = ctx.query;
    // 1. load config file

    // 2. glob all the files in an array (using chokidar or globby?)

    // 3. make a watcher for the glob by adding the glob to chokidar

    // for each component found, in the tranformed string
    // - import its docgen => create a plugin for that with .docgen
    // - import the vue component => use the standard vite plugin
    // - add {docgen: {}, component: {}} to the components array
    // - export default the components array

    // Next step: group components by sections

    ctx.type = "js";
    ctx.body = `export default [{name: "${query.config}"}]`;
    return ctx;
  });
};
