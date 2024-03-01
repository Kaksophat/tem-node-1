const http = require("http")
// const server = http.createServer((req,res)=>{
//   res.end("home page")
// })
// using event emitter 
const server = http.createServer()

server.on("request" , (req,res)=>{
  res.end("welcome")
})

server.listen(5000)

