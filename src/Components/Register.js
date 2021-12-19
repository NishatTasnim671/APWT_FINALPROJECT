import React, {useState, useEffect} from "react";
import axios from "axios";
import '../css/design2.css';



function Register() {
  const [inputs, setInputs] = useState({
    Name:"",Phone:"",Address:"",Username:"",Email:"",Password:"",Usertype:"Staff",Profileimg:"default.jpg"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("register",inputs)
    .then(resp=>{
        var infos = resp.data;
        console.log(infos);
        window.location = "/login";

    }).catch(err=>{
        console.log(err);
    });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
 <fieldset>
            <legend>Registration</legend>
     
      <tr>
        <td>Name</td>
    <td> <input type="text" name="Name" value={inputs.Name} placeholder="Name" onChange={handleChange} /></td> 
      </tr>
      
      <tr>
        <td>Phone</td>
     <td> <input type="text" name="Phone" value={inputs.Phone} placeholder="Phone" onChange={handleChange} /></td>

      </tr>
      <tr>
        <td>Address</td>
    <td>  <input type="text" name="Address" value={inputs.Address} placeholder="Address" onChange={handleChange} /></td>

      </tr>
      <tr>
        <td>Username</td>
     <td> <input type="text" name="Username" value={inputs.Username} placeholder="Username" onChange={handleChange} /></td>

      </tr>
      <tr>
        <td>Email</td>
      <td> <input type="text" name="Email" value={inputs.Email} placeholder="Email" onChange={handleChange} /></td>

      </tr>
      <tr>
        <td>Password</td>
      <td>  <input type="password" name="Password" value={inputs.Password} placeholder="Password" onChange={handleChange} /></td>

      </tr>
      <tr>
        <td>User Type</td>
      <td> <input type="text" name="Usertype" value={inputs.Usertype} placeholder="Usertype" onChange={handleChange} /></td>

      </tr>

      <tr>
      <input type="hidden" name="Profileimg" value={inputs.Profileimg} placeholder="Profileimg" onChange={handleChange} />

      </tr>





<tr>
        <input type="submit" value="Registration"  />
        </tr>
        </fieldset>
    </form>
    </div>
  )
}






export default Register;