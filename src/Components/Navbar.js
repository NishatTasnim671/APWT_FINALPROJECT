import React, {useState, userEffect} from "react";
import { Link } from "react-router-dom";
import '../css/design.css';

const Navbar = ()=>{
    
    return(
        <div class="header sticky">
            <h1>Welcome to Eflip shopping</h1>
            <div class="topnav"> 
           <Link to="/home">Home</Link>
            <Link to="/login">Sign in</Link>
             <Link to="/register">Sign up</Link>
           </div>
           
        </div>
        
    )
}
export default Navbar;