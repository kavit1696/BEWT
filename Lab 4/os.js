const os = require("os")

// --6--
console.log(os.type())
console.log(os.release())
console.log(os.platform())
console.log(os.arch())
// --7--
console.log((os.totalmem())/(1024*1024*1024))
console.log((os.freemem())/(1024*1024*1024))
// --8--
console.log(os.userInfo())
// --9--
console.log((os.uptime())/(3600))
// --10--
console.log(os.cpus());
os.cpus().map( (n)=>{
    console.log(n.model)
} );
console.log(os.networkInterfaces())