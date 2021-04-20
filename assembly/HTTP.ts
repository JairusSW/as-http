import { console } from '../node_modules/as-console/assembly/console'

declare function httpGet(url: string, headers: string, callbackPointer: i32): void

declare function httpPost(url: string, headers: string, data: string, callbackPointer: i32): void

export namespace http {
    export function get(url: string, headers: Map<string, string>, callback: (error: string, body: string) => void): void {

        let stringHeaders = ''

        let headerKeys = headers.keys()

        for (let i = 0; i < headerKeys.length; i++) {

            const headerKey = headerKeys[i]

            const headerValue = headers.get(headerKey)

            stringHeaders += '' + headerKey + ',,,,' + headerValue + ',,,,'

            // To keep from a header with a single comma from erroring

        }

        httpGet(url, stringHeaders, load<i32>(changetype<usize>(callback)))
    }
    export function post(url: string, headers: Map<string, string>, data: string, callback: (error: string, body: string) => void): void {

        let stringHeaders = ''

        let headerKeys = headers.keys()

        for (let i = 0; i < headerKeys.length; i++) {

            const headerKey = headerKeys[i]

            const headerValue = headers.get(headerKey)

            stringHeaders += '' + headerKey + ',,,,' + headerValue + ',,,,'

            // To keep from a header with a single comma from erroring

        }

        httpPost(url, stringHeaders, data, load<i32>(changetype<usize>(callback)))
    }
}

export function test(): void {

    const headers = new Map<string, string>()

    http.get('http://localhost:3000/get', headers, (error, body) => {

        console.log('GET Request: ' + body)

    })

    http.post('http://localhost:3000/post', headers, 'Hello, Server!', (error, body) => {

        console.log('POST Request: ' + body)

    })


}