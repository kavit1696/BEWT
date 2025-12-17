const fs = require("fs")
fs.readdir('.',"utf8",(err,data)=>{
    if(err){
        console.log("error: ",err)
    }
    else{
        data.map((n)=>{
            console.log(n)
        })
    }
})