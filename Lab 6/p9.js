const fs = require("fs")
try {
    if(fs.existsSync("config.json")){
        console.log("File exist")
    }
    else{
        console.log("File does not exist")
    }
} catch (error) {
    console.log("Error: ",error)
}