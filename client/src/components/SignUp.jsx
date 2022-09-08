import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const location=useLocation();
  const [User, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    Class: "",
    rollno: "",
    password: "",
    confirmpassword: "",
  });

  // variables name and value are declaired
  let name;
  let value;
  // The function handleChange declaired and defined
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]: value });
  };
 
const navigate=useNavigate()

  // The function PostData is declaired and defind
  const PostData = async(e) => {
    console.log('asalam o alaikum')
    //prevent default behavior
    e.preventDefault();
   const {name,email,phone,Class,rollno,password,confirmpassword}=User
   if(password===confirmpassword){

     const res=await fetch("/register",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,Class,rollno,password,confirmpassword
        })
        
      })
    
    const data= res.json()

    if(res.status===420 || !data){
      console.log("invalid credential")
          navigate("/SignUp",{state:{note:"Please fill the data correctly"}})
      

    }else{
      window.alert("Login Successful")
      console.log("User registered successfully")
        navigate("/Login",{state:{note:"You are registered successfully"}})
    }
  }else{
    window.alert("Password and confirm password are different")
  }

      //  const result=await axios.post("/register", User)
    

       

      //  if(result!=null){
         
      //   console.log("han g bhai register ho gia ha")
      //   navigate("/Login",{state:{note:"You are registered successfully"}})
        
      //   }
      //   else
      //   {
      //     navigate("/SignUp",{state:{note:"Please fill the data correctly"}})
      //     console.log("nhi bhai nhi hua register")
        
      //   }
        
          

     
      //  .then(()=>{
      //    navigate("/Login",{state:{note:"You are registered successfully"}})
      //    console.log(result)
      //    console.log("walaikum asalam")
      //  })
      //  .catch((err)=>{

      //    navigate("/SignUp",{state:{note:"Please fill the data correctly"}})
      //  })
      
    
        
        
  
   
        
   

   
  };
  // const getData=async()=>{
  //   try{
  //     const result = await axios.get("/login")
  // console.log(result)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  // React.useEffect(()=>{
  // getData();

  // },[])
  const deletefunc=()=>{

    navigate("/Login",{state:{note:"You are registered successfully"}})
  }
const stylee={
  color:"red"
}

  return (
    <div className="signUp">
      <div className="form">
        <form>
          <h4 style={stylee}>{location.state&&location.state.note}</h4>
          <h1>SIGN UP</h1>
          <div className="formData">
            <div className="formInput">
              <div className="input">
                <i className="zmdi zmdi-account"></i>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={User.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="zmdi zmdi-email"></i>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={User.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="zmdi zmdi-phone"></i>
                <input
                  type="Number"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={User.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="zmdi zmdi-book"></i>
                <input
                  type="text"
                  placeholder="Enter Class"
                  name="Class"
                  value={User.Class}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="zmdi zmdi-format-color-text"></i>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  name="rollno"
                  value={User.rollno}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="zmdi zmdi-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={User.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="zmdi zmdi-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  value={User.confirmpassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="image">
              <img
                className="formImage"
                src="../images/formImage1.jpg"
                alt="sign up image"
              />
              <a className="already" href="/Login">
                Already Registered
              </a>
            </div>
          </div>
          <input
            className="submitBtn"
            type="submit"
            value="Sign Up"
            name="submit"
            onClick={PostData}
          />
        </form>
      </div>
    
    </div>
  );
};

export default SignUp;
