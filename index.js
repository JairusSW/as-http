const fs = require('fs')

const loader = require('@assemblyscript/loader')

const consoleImports = require('as-console')

const asConsole = new consoleImports()

const HTTPimports = require('./imports')

const http = new HTTPimports()

const imports = {
    ...asConsole.wasmImports,
    ...http.wasmImports
}

const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + '/build/optimized.wasm'), imports)

asConsole.wasmExports = wasmModule.exports

http.wasmExports = wasmModule.exports

wasmModule.exports.test()