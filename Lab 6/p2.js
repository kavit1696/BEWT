const fs=require("fs")
   try {
        data = fs.readFileSync('demo.txt','utf-8')
        console.log("Data: ",data)
   } catch (error) {
        console.log("Error: ",error)
   }