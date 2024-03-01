var http = require("http");
var fs = require("fs")

http
.createServer((req,res)=>{
    const text = fs.readFileSync("./content/big.txt","utf8")
    res.end(text)
})
.listen(7174);











// const _= require("lodash")
// const items=[1,[2, [3,[4]]]];
// const newitems= _.flattenDeep(items);
// console.log(newitems);
// console.log("hello my name is bad man");

