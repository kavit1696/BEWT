const fs=require("fs")

fs.appendFile('demo3.txt','\nHello world',(err)=>{
    if(err){
        console.log("Error: ",err)
    }
    else{
        console.log("Append successfully")
    }
})