import React from "react";
import './css/Pantry.css';
import friedRice from './assets/friedRice.png'
import eggsTomato from './assets/eggsTomato.png'
import ramen from './assets/ramen.png'
const Pantry = () => {
    return (
        <div class ="pantry-page">
           <div><h1 id = "big-pantry-text">PANTRY</h1></div> 
            <div><h5 id = "pantry-description">Made too much food? Leftover extra ingredients? List it here!</h5></div>
            <div>
                <button id = "pantry-add-btn">Add an item</button>
            </div>
            <div class = "grid">
            <div class = "foodEntry"> <h5>Fried Rice</h5><img src = {friedRice} height = "200" width ="300"/> </div>
            <div class = "foodEntry"><h5>Chicken Salad Sandwich</h5><img src = {eggsTomato} height = "200" width ="300" /> </div>
            <div class = "foodEntry"> <h5>Ramen</h5><img src = {ramen} height = "200" width ="300" /></div>
            </div>
        </div>
    )
}


export default Pantry;