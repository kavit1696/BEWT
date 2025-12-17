const fs = require("fs")

fs.watch(".",(events,filename)=>{
    if(filename==="demo3.txt"){
        console.log(`Event:${events} file:${filename}`)
    }
})