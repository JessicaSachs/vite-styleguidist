import { styleguidist, prettyjson } from './server/plugins'
import { createServer } from 'vite'

const port = 3000
console.log('Creating a server at', `https://localhost:3000`)
createServer({
  configureServer: [styleguidist, prettyjson]
}).listen(port)
