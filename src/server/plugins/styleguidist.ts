import Router from 'koa-router'
import { ServerPluginContext } from 'vite';
import ComponentsRoute from '../routes/components'

export const styleguidist = ({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher // chokidar file watcher instance
}: ServerPluginContext) => {

  const router = new Router()
  router.get('/components', ComponentsRoute)

  app.use(router.routes())
     .use(router.allowedMethods())
}
