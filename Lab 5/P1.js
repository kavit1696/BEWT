const child_process = require('child_process')

child_process.exec('node --version',(error,stdout,stderr)=>{
    if(error){
        console.log("Error is: ",error);
        return;
    }
    if(stderr){
        console.log("stderr is: ",stderr);
        return;
    }
    console.log("stdout is: ",stdout);
})

child_process.exec("python p1.py",(error,stdout,stderr)=>{
    if(error){
        console.log("Error is: ",error);
        return;
    }
    if(stderr){
        console.log("stderr is: ",stderr);
        return;
    }
    console.log("stdout is: ",stdout);
})
