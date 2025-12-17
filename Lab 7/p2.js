const http = require('http')
const server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html")
    if(req.url === '/'){
        res.statusCode = 200
        res.end("Home page")
    }
    else if(req.url === '/about'){
        res.statusCode = 200
        res.end("About page")
    }
    else if(req.url === '/contact'){
        res.statusCode = 200
        res.end("Contact page")
    }
    else if(req.url === '/profile'){
        res.statusCode = 200
        res.end("Profile page")
    }
    else if(req.url === '/login'){
        res.statusCode = 200
        res.end("Login page")
    }
    else{
        res.statusCode = 404
        res.end("Page not found")
    }
    
})
server.listen(3000,()=>{
    console.log("Web server started at 3000")
})