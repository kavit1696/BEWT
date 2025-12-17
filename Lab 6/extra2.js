const fs = require("fs")

fs.copyFile('img.png','img2.png',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("img copy")
    }
})