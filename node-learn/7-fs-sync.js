const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
// console.log("First file content:", first);
// console.log("Second file content:", second);
writeFileSync("./content/result-sync.txt", `here result ${first} : ${second}`,
 {flag:"a"});
 console.log("done with this");
 console.log("starting next one");
