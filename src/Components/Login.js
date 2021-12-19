import React, {useState, userEffect} from "react";
import axios from "axios";
import '../css/design2.css';

const Login = ()=>{
  
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");

    const loginSubmit= ()=>{
        var obj = {username: name, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            window.location = "/home";
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
            <form>
            
               <legend>Log In</legend>
               
                       User Name
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
          
            
                Password
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
               </form>
               
            
                <button onClick={loginSubmit}>Login</button>
               
        </div>
        
    )
}
export default Login;