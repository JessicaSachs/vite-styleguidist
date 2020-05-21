import * as json from 'koa-json'
import { ServerPluginContext } from 'vite';

/**
 * Prettify json conditionally using the ?pretty querystring param
 * @example endpoint?pretty
 * {
 *   "property": "some content"
 * }
 */
export const prettyjson = ({ app }: ServerPluginContext) => {
  app.use(
    /* @ts-ignore WHY */
    json({
      pretty: false,
      param: 'pretty'
    }))
}
