const http = require("http")

const server = http.createServer((req,res)=>{
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
server.listen(7000);
