const {readFile,writeFile} = require("fs").promises
// const util = require("util")

// const readfilepromise = util.promisify(readFile)
// const writefilepromise = util.promisify(writeFile)

const start = async()=>{
  try{
    const first= await readFile("./content/subfolder/first.txt" , "utf8")
    const second1= await readFile("./content/subfolder/second.txt" , "utf8")
     await writeFile("./content/async-mine.txt",`here result ${second1}: ${first}`)
    console.log(second1);
  }
  catch(err){
    console.log(err);
  }
}
start()

// const gettext = (path)=>{
//   return new Promise((resolve, reject) => {
//     readFile(path , "utf8" , (err,data)=>{
//       if(err){
//         reject(err)
//         return ;
//       }
//       else{
//         resolve(data);
//       }
//     })
  
//   })
  
// }
