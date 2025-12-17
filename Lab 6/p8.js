const fs = require("fs")

fs.copyFile('source.txt','backup.txt',(err)=>{
    if(err){
        console.log("Error: ",err)
    }
    else{
        console.log("Copy successful")
    }
})