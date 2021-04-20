# As-HTTP
**HTTP Client For AssemblyScript**

## Features
- Uses Fetch in NodeJS and Web
- Handles Headers
- Get/Post Support
- Http/1.1

## Setting up

**Add --exportTable and --exportRuntime flags**

```js
+ const HTTPimports = require('as-http')

+ const http = new HTTPimports()

const imports = {
+    ...http.wasmImports
}

const wasmModule = loader.instantaniateSync()

+ http.wasmExports = wasmModule.exports
```

## Usage

**GET Request**
```js
import { http } from 'as-http'

const headers = new Map<string, string>()

http.get('http://example.com/', headers, (error, body) => {

    console.log('Response: ' + body)

})
```

**POST Request**
```js
import { http } from 'as-http'

const headers = new Map<string, string>()

const data = 'Hello, Server!'

http.post('http://example.com/', headers, data, (error, body) => {

    console.log('Response: ' + body)

})
```