const url = "http://www.demo.com";

const urlobj = new URL(url);

urlobj.searchParams.append("Name","prince")
urlobj.searchParams.append("Age","20")

console.log(urlobj.toString())