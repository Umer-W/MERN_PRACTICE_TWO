const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const cookies=require("cookie-parser")
const Customer = require("../model/CustomerSchema");
// const authenticate=require("../middleware/authenticate")
router.get("/",(req,res)=>{
    res.send("han g Assalam o Alaikum from router ")
})

// ====================================================== Login Page ==================================================


let token;
router.post("/login", async (req, res) => {
    try {
      const result = await Customer.findOne({$and:[{email:req.body.email},{password:req.body.password}]});
      if (result != null) {
        console.log("You are logged in successfully")
        token=await result.generateAuthToken();
        console.log(token)
        res.cookie("jwtoken",token,{
          expires:new Date(Date.now()+ 25892000000),
          httpOnly:true
          
          
        })

        res.status(202).json({message:"you are logged in successfully"});
  
  
      } else {
        res.status(402).send("Wrong email or password");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Error found");
    }
  });
  


  // =================================================== Register page ================================================

router.post("/register", async (req, res) => {
    console.log("hello from register");
    console.log(req.body);
    
    const register = new Customer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      Class: req.body.Class,
      rollno: req.body.rollno,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
      // wese yaha khali req.body bhi run ho jata if both objects are same req.body and model.CustomerSchema
    });
    try {
      await register.save();
      console.log("Registered Successfully")
      return res.status(201).json({message: "User Registered Successfully"})
    } catch (err) {
      console.log(err);
      console.log("Registration Failed");
      return res.status(420).json({error:"User Registration Failed"})
    }
  });
  

//   =====================================================  About us  ===========================================




const authenticate=async(req,res,next)=>{
    try{
        console.log("hello g hai g")
      
       const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
       console.log("this is another")
       console.log(token)
       const rootCustomer= await Customer.findOne({_id: verifyToken._id, "tokens.token": token})

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




router.get("/about",authenticate,(req,res)=>{
    console.log("assalam o alaikum from about us page")
    console.log(req.rootCustomer)
    
    res.send(req.rootCustomer)

})




module.exports=router