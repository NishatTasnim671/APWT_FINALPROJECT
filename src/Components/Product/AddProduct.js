import React, {useState, useEffect} from "react";
import axios from 'axios';
import '../../css/design3.css';
import Head from '../Head'
const AddProduct = ()=>{
   const [productInput,setProduct]=useState({
      P_id: '',
      name: '',
      price: '',
      category: '',
      quantity: '',
      details: '',
     
   });
   const [picture,setPicture]=useState([]);
   const [picture2,setPicture2]=useState([]);
   const [picture3,setPicture3]=useState([]);
   const [errorlist,setError]=useState({
      P_id: '',
      name: '',
      price: '',
      category: '',
      quantity: '',
      details: '',
   });
   const handleInput=(e)=>{
      e.persist();
      setProduct({...productInput,[e.target.name]:e.target.value});
   }
   const handleImage=(e)=>{
      e.persist();
      setPicture({P_img1:e.target.files[0]});
   }

   const handleImage2=(e)=>{
      e.persist();
      setPicture2({P_img2:e.target.files[0]});
   }
   const handleImage3=(e)=>{
      e.persist();
      setPicture3({P_img3:e.target.files[0]});
   }

   const submitProduct=(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('P_img1',picture.P_img1);
      formData.append('P_img2',picture2.P_img2);
      formData.append('P_img3',picture3.P_img3);
      formData.append('P_id',productInput.P_id);
      formData.append('name',productInput.name);
      formData.append('price',productInput.price);
      formData.append('category',productInput.category);
      formData.append('quantity',productInput.quantity);
      formData.append('details',productInput.details);
      axios.post("addproduct",formData)
      .then(res=>{
         console.log(res.data)

     
         if(res.data.status===200)
                  {
                   
                     setError([]);
                     window.location = "/allproducts";
                  }
                  else if (res.data.status === 422)
                  {
                     
                     setError(res.data.errors);
                  }
               
      })
      .catch(err => {
         console.log(err.res); 
      });
      
     
   }
  return(
     <div>
        <Head/>
        <h1 align="center">Add Product</h1>
         <form onSubmit={submitProduct} encType="multipart/form-data" >
               <fieldset>
            <legend>Add Product</legend>
           <table>
             <thead>
                 <tr>
        <td>   <span>Product Id</span></td>
         <td><input type="text" name="P_id" onChange={handleInput} value={productInput.P_id} ></input></td>
         <td>  <small>{errorlist.P_id}</small></td>
           </tr>
           <tr>
         <td>   <span>Product Name</span></td>  
         <td><input type="text" name="name" onChange={handleInput} value={productInput.name} ></input></td>  
         <td>  <small>{errorlist.name}</small></td>  
           </tr>
         
         <tr>
         <td>    <span>Price</span></td>  
         <td>    <input type="text" name="price" onChange={handleInput} value={productInput.price} ></input></td>  
         <td>   <small>{errorlist.price}</small></td>  
           </tr>  

       
<tr>
<td>  <span>Category</span></td>  
<td>   <select name="category" onChange={handleInput} value={productInput.category}>
          <option value="">Choose...</option>
          <option value="Laptops">Laptops</option>
          <option value="Desktops">Desktops</option>
          <option value="Watches">Watches</option>
          <option value="Smart phone">Smart phone</option>
          <option value="Motor Bikes">Motor Bikes</option>
          <option value="Smart & Andriod tvs">Smart & Andriod tvs</option>
          <option value="Speakers">Speakers</option>
          <option value="Headphones">Headphones</option>
          <option value="Refrigerators">Refrigerators</option>
          <option value="Split Ac">Split Ac</option>
          <option value="Men Fashion">Men Fashion</option>
          <option value="Women Fashion">Women Fashion</option>     
               
</select></td>  
<td>  <small>{errorlist.category}</small></td>  
</tr>
<tr>
<td>    <span>Quantity</span></td>  
<td>    <input type="text" name="quantity" onChange={handleInput} value={productInput.quantity} ></input></td>  
<td>    <small>{errorlist.quantity}</small></td>  
          </tr>          
     <tr>     
     <td>     <span>Details</span></td>  
     <td>       <input type="text" name="details" onChange={handleInput} value={productInput.details} ></input></td>  
            <td>     <small>{errorlist.details}</small></td>  
           </tr>  
          <tr>
          <td>     <span>Image 1</span></td>  
          <td>    <input type="file" name="P_img1" onChange={handleImage}  ></input> </td>  
          </tr> 
          <tr>    
          <td>      <span>Image 2</span></td>  
          <td>    <input type="file" name="P_img2" onChange={handleImage2}  ></input></td>  
          </tr>  
          <tr>
          <td>    <span>Image 3</span></td>  
          <td>    <input type="file" name="P_img3" onChange={handleImage3}  ></input> </td>  
          </tr>   
    <tr>    
  <input type="submit"  value="Add Product" ></input>
  </tr>
      </thead>   
    </table>
            </fieldset>
            </form>
       </div>
    )
    }

export default AddProduct;

