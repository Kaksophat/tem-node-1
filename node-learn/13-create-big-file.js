const Fs = require("fs")

for(let i =0 ; i<1000 ; i++){
  Fs.writeFileSync("./content/big1.txt" , `hello world ${i}\n` , {flag:"a"})
}
