const fs = require("fs")

fs.mkdir('my-data', (err) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.log("Folder already exist")
        }
        else {
            console.log("Error: ", err)
        }
    }
    else {
        console.log("File successfully created")
    }
})