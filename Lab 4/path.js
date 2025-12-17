const path = require("path");

// --1--
console.log(__dirname)
console.log(__filename)
console.log(path.basename(__filename))
console.log(path.basename(__dirname))
console.log(path.extname(__filename))
// --2--
console.log(path.join("users", "arjun", "documents", "project"))
// --3--
console.log(path.normalize("//folder//subfolder////file.txt"))
// --4--
console.log(path.isAbsolute("E:/BEWT/Lab 4/path.js"))
console.log(path.isAbsolute(".\Lab 4\path.js"))
// --5--
console.log(path.resolve( "folder", "subfolder", "app.js"))