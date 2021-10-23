import React from "react";
import './Home.css';
import PinkBlob from './assets/blob1.svg'

const Home = () => {
    return (
        <div class = "home-page" >
            <div id = "logo"></div>

           <div class = "blob">
             <img src = {PinkBlob} alt="Pink Blob"/>
           </div>

        </div>
    )
}
export default Home;
