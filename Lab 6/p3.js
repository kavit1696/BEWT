const fs=require("fs")

fs.writeFile('demo3.txt','Welcome to darshan',(err)=>{
    if(err){
        console.log("Error: ",err)
    }
    else{
        console.log("Write successfully")
    }
})