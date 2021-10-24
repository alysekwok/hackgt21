import React from "react";
import './css/Order.css';


const Order = () => {
    return (
        <div class = "order-page" >
        <div><h1 class = "order-header">ORDER NOW</h1></div>
        <div class = "orderGrid"> 
            <div class = "orderEntry"> </div>
            <div class = "orderEntry"> </div>
            <div class = "orderEntry"> </div>
            <div class = "orderEntry"> </div>
            <div class = "orderEntry"> </div>
            <div class = "orderEntry"> </div>
            </div>

        <h1 class = "order-header">REQUEST</h1>
        <div class = "rlist">
        <div class = "requestEntry"> 
            <div class = "rprofile-placeholder"></div>
            <div><h5 class = "rname">Alyse Kwok</h5></div>
            </div>
            <div class = "requestEntry">
            <div class = "rprofile-placeholder"></div>
            <h5 class = "rname">Ishaan Guha</h5>
                 </div>
            <div class = "requestEntry">
            <div class = "rprofile-placeholder"></div>
            <h5 class = "rname">Elaine Chen</h5> </div>
            
            <div class = "requestEntry">
            <div class = "rprofile-placeholder"></div> 
            <h5 class = "rname">Eddy Wang</h5></div>
         </div>
         </div>
         
    )
}
export default Order;