const { createServer } = require('vite')

type PluginOptions = {
    root: string,
    app: any,
    server: any,
    watcher: any
}

const myPlugin = ({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher // chokidar file watcher instance
}: PluginOptions) => {

  console.log('plugin being activated')

  // handle my beautiful docgen route
  app.use(async (ctx: any, next: any) => {
    console.error('foo')
    console.log("REQUEST", ctx)
    // You can do pre-processing here - this will be the raw incoming requests
    // before vite touches it.
    if (ctx.path.endsWith('.scss')) {
      // Note vue <style lang="xxx"> are supported by
      // default as long as the corresponding pre-processor is installed, so this
      // only applies to <link ref="stylesheet" href="*.scss"> or js imports like
      // `import '*.scss'`.
      console.log('pre processing: ', ctx.url)
      ctx.type = 'css'
      ctx.body = 'body { border: 1px solid red }'
    }

    // ...wait for vite to do built-in transforms
    await next()

    // Post processing before the content is served. Note this includes parts
    // compiled from `*.vue` files, where <template> and <script> are served as
    // `application/javascript` and <style> are served as `text/css`.
    if (ctx.response.is('js')) {
      console.log('post processing: ', ctx.url)
      console.log(ctx.body) // can be string or Readable stream
    }
  })
}

const port = 3000
console.log('Creating a server at', `http://localhost:3000`)
createServer({
  plugins: [myPlugin],
}).listen(port)
