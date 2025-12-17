const http = require('http')
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    res.end("Hello world")
})
server.listen(3000,()=>{
    console.log("Web server started at 3000")
})