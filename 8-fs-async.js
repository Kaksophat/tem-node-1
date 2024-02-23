const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("done with task");
    const first = result;
    readFile("./content/subfolder/first.txt", "utf8", (err, result)=> {
        if (err) {
            console.log(err);
            return;
        }
        console.log("hello");
        const second = result;
        writeFile("./content/result-sync1.txt", `here result ${first} : ${second}`,(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log("done with this");
        })
    })
});
console.log("starting next one");