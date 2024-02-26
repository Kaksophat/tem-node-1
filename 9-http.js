const http = require("http")

const server1 = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("this is home page");
    }
    if(req.ulr === "/about"){
        res.end("about my contact")
    }
    res.end(`
       <h1>Oosp !</h1>
       <p>we can't seem to fine the page you looking for</p>
       <a href="/">back home</a>
    `)

})
server1.listen(7000);

const http = require("http")

const server = http.createServer((req,res)=>{
  if(req.url==="/"){
    res.end("Home page");
  }
  if(req.url==="/about"){
    console.log("loop");
    //blocking code
    for(let i=0;i<10;i++){
      for(let j=0;j<10;j++){
        console.log(`${i} ${j}`);
      }
    }
    res.end("About page");
  }
  // console.log("error page");
})
server.listen(5000,()=>{
  console.log("Server listening on port 5000...");
})
