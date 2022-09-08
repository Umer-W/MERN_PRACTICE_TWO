const jwt=require("jsonwebtoken")
const cookies = require("cookie-parser");
const Customer=require("../model/CustomerSchema");


const authenticate=async(req,res,next)=>{
    try{
        console.log("hello g hai g")
       const token=req.cookies.jwtoken;
       console.log(token)
       const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

       const rootCustomer= await User.findOne({_id: verifyToken._id, "tokens.token": token})

       if(!rootCustomer){
           throw new Error("Student not found")
        }

        req.token=token
        req.rootCustomer=rootCustomer
        req.CustomerID=Customer._id
        console.log("han g bhai")
        next();

    }
    catch(err){
        res.status(401).send("Unauthorized: No token provided")
        console.log(err)
    }



}

module.exports=authenticate