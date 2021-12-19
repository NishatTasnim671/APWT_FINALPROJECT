import React,{useState,useEffect} from "react";
import axios from 'axios';
import '../css/profiledesign.css';


const Profile=()=>{
    const [profile,setProfile]=useState([]);

    useState(()=>{
        var storedInfo = JSON.parse(localStorage.getItem("user"));
        var obj = {id : storedInfo.userId};

        //console.log(obj);
        axios.post("http://127.0.0.1:8000/api/profile",obj)
        .then(resp=>{
           console.log(resp.data);
            setProfile(resp.data);

            console.log(storedInfo.userId);
            //window.location.reload(false);
        }).catch(err=>{
            console.log(err);
        });

    },[])
    return (
        <div class="header sticky">
             <fieldset>
        <legend>Information</legend>
                {
                <div>
                    
                    <h1 align="center">Name : {profile.U_Name}</h1>
                    <h3 align="center">Phone : {profile.U_phone}</h3>
                    <h3 align="center">Address : {profile.U_address}</h3>
                    <h3 align="center">Username : {profile.U_username}</h3>
                    <h3 align="center">Email : {profile.U_email}</h3>
                   

                </div>

                }
                </fieldset>
        </div>
    )
}
export default Profile;