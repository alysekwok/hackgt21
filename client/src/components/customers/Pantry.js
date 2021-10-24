import React from "react";
import './css/Pantry.css';


const Pantry = () => {
    return (
        <div class ="pantry-page">
            <h1 id = "big-pantry-text">PANTRY</h1>
            <h5 id = "pantry-description">Made too much food? Leftover extra ingredients? List it here!</h5>
            <div id = "add-button">
            <button>Add a pantry item</button>
            </div>
            <div class = "grid">
            <div class = "foodEntry"> </div>
            <div class = "foodEntry"> </div>
            <div class = "foodEntry"> </div>
            <div class = "foodEntry"> </div>
            <div class = "foodEntry"> </div>
            <div class = "foodEntry"> </div>
            </div>
        </div>
        

    )
}
export default Pantry;