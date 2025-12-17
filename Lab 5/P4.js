const url = "http://www.demo.com?name:prince&age:20";

const urlobj = new URL(url);

urlobj.searchParams.forEach((value,key) => {
    console.log(value)
    console.log(key)
});

console.log("Hostname: ",urlobj.hostname)
console.log("Protocol: ",urlobj.protocol)
console.log("Pathname: ",urlobj.pathname)


