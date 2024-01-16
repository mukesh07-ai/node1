http = require('node:http')
server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end('Get Response')
})

server.listen(3000, ()=>{console.log('server Up')})