import * as glob from 'glob'

const root = '../'
const configFileGlob = '**/guidist.config.js'
const resolvedFilePath = glob.sync(configFileGlob)[0]

const defaultConfigFile = {
  dir: __filename.split('/').slice(0, -1).join('/'),
  result: {
    components: '**/*.vue'
  }
}

function makeConfig(root: string, path: string) {
  const config = {
    dir: require.resolve(root + path).split('/').slice(0, -1).join('/'),
    result: require(root + path)
  }


  config.result._resolvedComponents = `${config.dir}/${config.result?.components}`
  return config
}
export const configFile = resolvedFilePath ? makeConfig(root, resolvedFilePath) : defaultConfigFile

