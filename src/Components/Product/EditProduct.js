import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../css/design2.css';
function EditProduct (props){
   const {id} = useParams();
   const [productInput,setProduct]=useState([]);
   const [picture,setPicture]=useState([]);
   const [picture2,setPicture2]=useState([]);
   const [picture3,setPicture3]=useState([]);
   const [errorlist,setError]=useState([]);
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
   useEffect(()=>{
      
        axios.get(`editproduct/${id}`)
    .then(resp=>{
        
      console.log(resp.data);      
      setProduct(resp.data);
      
       }).catch(err=>{
      console.log(err);
  });
  },[]);
 
  const updateProduct=(e)=>{
   e.preventDefault();
   const formData = new FormData();
   formData.append('P_img1',picture.P_img1);
   formData.append('P_img2',picture2.P_img2);
   formData.append('P_img3',picture3.P_img3);
   formData.append('P_id',productInput.P_id);
   formData.append('P_name',productInput.P_name);
   formData.append('P_price',productInput.P_price);
   formData.append('P_categories',productInput.P_categories);
   formData.append('P_quantity',productInput.P_quantity);
   formData.append('P_details',productInput.P_details);
   axios.post(`updateproduct/${id}`,formData)
   .then(res=>{
      console.log(res.data)

  
      if(res.data.status===200)
               {
                  window.location = "/allproducts";
                  setError([]);
               }
               else if (res.data.status === 422)
               {
                  
                  setError(res.data.error);
               }
            
   })
   .catch(err => {
      console.log(err.res); 
   });
   
  
}
  return(
     <div>
         <form onSubmit={updateProduct} encType="multipart/form-data" >
               <fieldset>
            <legend>Edit Product</legend>
           
            <tr>
        <td>   <span>Product Id</span></td>
         <td><input type="text" name="P_id" onChange={handleInput} value={productInput.P_id} ></input></td>
         <td>  <small>{errorlist.P_id}</small></td>
           </tr>
           <tr>
         <td>   <span>Product Name</span></td>  
         <td><input type="text" name="P_name" onChange={handleInput} value={productInput.P_name} ></input></td>  
         <td>  <small>{errorlist.P_name}</small></td>  
           </tr>
         
         <tr>
         <td>    <span>Price</span></td>  
         <td>    <input type="text" name="P_price" onChange={handleInput} value={productInput.P_price} ></input></td>  
         <td>   <small>{errorlist.P_price}</small></td>  
           </tr>  

       
<tr>
<td>  <span>Category</span></td>  
<td>   <select name="P_categories" onChange={handleInput} value={productInput.P_categories}>
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
<td>  <small>{errorlist.P_categories}</small></td>  
</tr>
<tr>
<td>    <span>Quantity</span></td>  
<td>    <input type="text" name="P_quantity" onChange={handleInput} value={productInput.P_quantity} ></input></td>  
<td>    <small>{errorlist.P_quantity}</small></td>  
          </tr>          
     <tr>     
     <td>     <span>Details</span></td>  
     <td>       <input type="text" name="P_details" onChange={handleInput} value={productInput.P_details} ></input></td>  
            <td>     <small>{errorlist.P_details}</small></td>  
           </tr> 
         
           <tr>
           <td>     <span>Image 1</span></td>
        <td>   <input type="file" name="P_img1" onChange={handleImage}  ></input> </td>
         <td>  <img src={`http://127.0.0.1:8000/assets/uploads/product/image1/${productInput.P_img1}`}></img> </td>
           </tr>
           <tr>
       <td>     <span>Image 2</span></td>
       <td>   <input type="file" name="P_img2" onChange={handleImage2}  ></input></td>
           <td>   <img src={`http://127.0.0.1:8000/assets/uploads/product/image2/${productInput.P_img2}`}></img> </td>
           </tr>
          <tr>
             <td>  <span>Image 3</span></td>
             <td>   <input type="file" name="P_img3" onChange={handleImage3}  ></input> </td>
             <td>   <img src={`http://127.0.0.1:8000/assets/uploads/product/image3/${productInput.P_img3}`}></img> </td>
          </tr>    
      <tr>  
 <td> <input type="submit"  value="Edit Product" ></input></td>
  </tr> 
           
    
            </fieldset>
            </form>
       </div>
    )
    }

export default EditProduct;