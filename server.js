http = require('node:http')
server = http.createServer((req, res) =>{
    //data = {Name:'Mukesh', Phone:'7260926717', age:'21'}
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end('data')
})

server.listen(3000, ()=>{console.log('server Up')})