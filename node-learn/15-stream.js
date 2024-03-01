const { createReadStream } = require("fs");

const read = createReadStream("./content/big1.txt", {
    highWaterMark: 9000,
    encoding: "utf8", // Corrected typo
});
console.log(read);

read.on("data", (result) => {
    console.log(result);
});

read.on("error", (error) => {
    console.error("An error occurred while reading the file:", error);
});



