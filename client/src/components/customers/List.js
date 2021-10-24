import React from "react";
import './css/List.css';
import soosh from './assets/soosh.jpeg';

const List = () => {
    return (
        <div class = "list-page" >
        <h1 class = "list-header">LIST A DISH</h1> 
        <div class="rect"></div>
        
        <div class="img-rect">
            <img src={soosh} id="s"></img>
        </div>
        <div>
            <h2 class="img-header">TAKE A PICTURE</h2>
        </div>

        <div class="name-rect"></div>
        <div class="ing-rect"></div>
        <div class="desc-rect"></div>

        <div>
            <h2 class="name-header">Dish Name</h2>
        </div>
        <div>
            <h2 class="ing-header">Ingredients</h2>
        </div>
        <div>
            <h2 class="desc-header">Description</h2>
        </div>
        <div>
            <h2 class="diet-header">Dietary Restrictions</h2>
        </div>

        <div id="v-button">
            <button>VEGAN</button>
        </div>
        <div id="veg-button">
            <button>VEGETARIAN</button>
        </div>
        <div id = "add-button">
            <button>POST</button>
        </div>
        <div id="gf-button">
            <button>GLUTEN-FREE</button>
        </div>

        </div>
    )
}
export default List;