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

headers.set('token', 'GqC2F-e[.2,s</01kdFw')
//--> Add/Edit any header

http.get('http://example.com/', headers, (error, body) => {

    console.log('Response: ' + body)

})
```

**POST Request**
```js
import { http } from 'as-http'

const headers = new Map<string, string>()

headers.set('token', 'GqC2F-e[.2,s</01kdFw')
//--> Add/Edit any header

const data = 'Hello, Server!'
//--> Add data chunk (Multipart coming soon)

http.post('http://example.com/', headers, data, (error, body) => {

    console.log('Response: ' + body)

})
```

## Examples

**Get a random joke**

```js
import { http } from 'as-http'

const headers = new Map<string, string>()

http.get('https://official-joke-api.appspot.com/random_joke', headers, (error, body) => {

    console.log('Response: ' + body)

})
```

**Get youtube search results**

```js
import { http } from 'as-http'

const headers = new Map<string, string>()

const query = 'Marshmallow'

http.get(`https://youtubestream.jairussw.repl.co/search?query=${query}&limit=5`, headers, (error, body) => {

    console.log('Response: ' + body)

})
```