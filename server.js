http = require('node:http')
fs = require('node:fs')
server = http.createServer((req, res) =>{
    html = fs.readFileSync('./index.html', 'utf-8')
    //data = {Name:'Mukesh', Phone:'7260926717', age:'21'}
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end(html)
})

server.listen(3000, ()=>{console.log('server Up')})