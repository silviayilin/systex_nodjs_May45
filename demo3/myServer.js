const http =require("http")

function processRecord(request, response) {
const body = 'Node.JS Tutorial'
const contentLength = body
response.writeHead(200, {
    'Content-Length': contentLength,
        'Content-Type': 'text/plain'
})
response.end(body)
}

const server = http.createServer(processRecord)
const serverPort = 8765
console.log("server created, list to Port", serverPort)
server.listen(8765)