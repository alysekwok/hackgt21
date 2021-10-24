import React from "react";
import './css/List.css';

const List = () => {
    return (
        <div class = "list-page" >
        <h1 class = "list-header">LIST A DISH</h1>
        <h2 class = "img-header">TAKE A PICTURE</h2>
        <div class="rect"></div>
        
        <div class="img-rect"></div>
    
        <div id = "add-button">
        <button>POST</button>
        </div>

        </div>
    )
}
export default List;