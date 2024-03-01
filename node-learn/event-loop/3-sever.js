const http = require("http")
console.log("start server");
const server = http.createServer((req,res)=>{
  console.log("request server");
  res.end("hello");
})
server.listen(5000,()=>{
  console.log("listing server 5000.....");
})