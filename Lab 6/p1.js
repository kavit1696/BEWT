const fs=require("fs")

fs.readFile('demo.txt',(err,data)=>{
    if(err){
        console.log("Error: ",err)
    }
    else{
        console.log("Data: ",data.toString())
    }
})