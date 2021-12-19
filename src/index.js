import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./Components/Home";
import Foot from "./Components/Foot";
import Head from './Components/Head';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Category from './Components/Category';
import AddProduct from './Components/Product/AddProduct';
import AllProducts from './Components/Product/AllProducts';
import EditProduct from './Components/Product/EditProduct';
import OrderDetails from './Components/OrderDetails';
import Profile from './Components/Profile';
import axios from 'axios';

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;


ReactDOM.render(
  <React.StrictMode>
    <Router>
   
      <Switch>
        <Route exact path="/">
          <Navbar/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
       
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/allcategories">
          <Category/>
        </Route>
        <Route exact path="/addproduct">
          <AddProduct/>
        </Route>
        <Route exact path="/allproducts">
          <AllProducts/>
        </Route>
        <Route exact path="/editproduct/:id">
          <EditProduct/>
        </Route>
        <Route exact path="/allorders">
          <OrderDetails/>
        </Route>
      

      </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
