const eventmiter = require("events")

const customiter = new eventmiter()

customiter.on("repons",(product)=>{
  console.log(`other data is ${product}`);
})
customiter.emit("repons" ,  "coca")
customiter.on("repons",(name,id)=>{
  console.log(`data recive by user ${name} with id:${id}`);
})
customiter.emit("repons" , "sophat" , 101)
