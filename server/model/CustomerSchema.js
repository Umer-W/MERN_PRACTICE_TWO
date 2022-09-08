const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ]
});

CustomerSchema.methods.generateAuthToken=async function(){
  try{
     let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
     this.tokens=this.tokens.concat({token:token})
     await this.save()
     return token;
  }
  catch(err){
    console.log(err)
  }
}

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
