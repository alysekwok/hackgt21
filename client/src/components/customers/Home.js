import React from "react";
import './css/Home.css';
import PinkBlob from './assets/blob1.svg'

const Home = () => {
    return (
        <div class = "home-page" >
            <div id = "container">

           <div class = "blob">
             <img src = {PinkBlob} alt="Pink Blob"/>
           </div>

           <div id = "tagline-container">
           <h1 class = "tagline">A home cooked meal, </h1>
           <h1 class = "tagline">away from home</h1>
           </div>

           <div class = "start-class">
           <button id = "create-account-button">View meals</button>
           </div>
         </div>
        </div>
        
    )
}
export default Home;
