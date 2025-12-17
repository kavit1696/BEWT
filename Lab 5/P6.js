const EventEmitter = require('events')

const event = new EventEmitter();

event.on("greet",(name)=>{
    console.log(`Helloo ${name}`)
})

setInterval(()=>{
    event.emit("greet","Prince")
},2000)