const {readFile} = require("fs")
console.log("start readfile");
readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
      console.log(err);
      return;
  }
  console.log(result);
})
console.log("starting next readfile");