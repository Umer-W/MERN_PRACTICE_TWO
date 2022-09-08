import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Login = () => {
const navigate=useNavigate()
  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
const loginUser=async(e)=>{
  e.preventDefault()


  const result = await fetch("/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,
      password
    })

  })
  const data =result.json()
  if(result.status===402 || !data){
    window.alert("Invalid Credential")

  }
  else{
    window.alert("Logged in Successfully")
    navigate("/About")
  }
}



  const location=useLocation()
  const stylee={
    color:"lightgreen"
  }
  return (
    <div className="form login">
      <form >
        <h4 style={stylee}>{location.state&&location.state.note}</h4>
        <h1>LOGIN</h1>

        <div className="input">
          <i className="zmdi zmdi-email"></i>
          <input type="email"
           placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

             />
        </div>

        <div className="input">
          <i className="zmdi zmdi-lock"></i>
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}



          />
        </div>

        <input
          className="submitBtn"
          type="submit"
          value="Login"
          name="submit"
          onClick={loginUser}
        />
      </form>
    </div>
  );
};

export default Login;
