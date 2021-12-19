import React, {useState, useEffect} from "react";
import axios from "axios";

const Category = (props) =>{
    const[categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get("Category/list")
        .then(resp=>{
        console.log(resp.data);
        setCategories(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);
        
    return(
        <div>
            <h1>All Categories</h1>
            <ul>
                {
                    categories.map(c=>(
                        <li key={c.id}>{c.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Category;