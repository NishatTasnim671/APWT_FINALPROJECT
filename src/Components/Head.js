import React from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/design.css';
import { useHistory } from "react-router-dom";
const Head = () => {
    var user;
    let history = useHistory();
   // var isLoggedOut = false;
    const logout = () => {
      if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
        var obj = { id: user.id };
        if (axios.post("logout", obj)) {
        localStorage.removeItem('user');
          history.push("/"); //To redirect to Homepage
           window.setTimeout(function(){window.location.reload()},200);
         // isLoggedOut = true;
        }
      }
      else {
        history.push("/login");
      }
      
    }



    
    

    
    return(
   
            <div class="header sticky">
                 <h1>Welcome to Eflip shopping</h1>
                 <div class="topnav">  
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/allproducts">All Products</Link>
            <Link to="/allorders">Orders</Link>
            <Link to="#logout"   onClick={logout}>Logout</Link>
            </div>

        </div>

    )   
    
  
}
export default Head;