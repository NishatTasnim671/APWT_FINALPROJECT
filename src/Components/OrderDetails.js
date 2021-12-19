import React, {useState, useEffect} from "react";
import axios from "axios";
import '../css/design1.css';
import Head from './Head'

const OrderDetails = (props) =>{
    const[orders, setOrderdetails] = useState([]);

    useEffect(()=>{
        axios.get("allorders")
        .then(resp=>{
           
        console.log(resp.data);      
        setOrderdetails(resp.data);
        
         }).catch(err=>{
        console.log(err);
    });
    },[]);
   
       
            
   
        
    return(
        
        <div class="header1">
            <Head/>
            <h1>All Order Details</h1>
           
            <table class="table" border='1'>
              <thead>
            <tr>
                    <th>Order Id</th>
                <th>Customer Name</th>
              <th>Total Price</th>
              <th>Payment type</th>
              <th>Status</th>
              
                    </tr>
                    </thead>
               
                    {
       
       orders.map((o)=>{
           return(
               <tr key={o.id}>
                   <td>{o.O_id}</td>
        <td>{o.U_username}</td>
            
            <td>{o.P_tprice}</td>
            <td>{o.Paymanttype}</td>
            <td>{o.O_status=='0' ? 'pending':'completed'}</td>
               </tr>    

         );  } )

          
   }
        
        
   
        
   
            </table>
           
           
        </div>
    )
}
export default OrderDetails;