const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html")
    if(req.url === '/'){
        res.end("Home page")
    }
    if(req.url === '/about'){
        fs.readFile("about.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    if(req.url === '/contact'){
       fs.readFile("contact.txt",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }    
})
server.listen(3000,()=>{
    console.log("Web server started at 3000")
})