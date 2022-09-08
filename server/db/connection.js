const mongoose=require("mongoose")

const DB=process.env.DATABASE;

mongoose.connect(DB)
.then(()=>{
    console.log("G bhai database connect ho chuki ha ")
})
.catch((err)=>{
    console.log(err)
})