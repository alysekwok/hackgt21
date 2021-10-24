import React from "react";
import './css/Messages.css';


const Messages = () => {
    return (
        <div class = "messages-page" >
            <div>
                <h3 class = "message-header">MESSAGES</h3>
                </div>
             <div class = "search-bar-over" id = "search-container">
            <input id="search-bar" placeholder="Search messages"/>
        </div> 
        <div class = "list">
            <div class = "chatEntry"> 
            <div class = "profile-placeholder"></div>
            <div><h5 class = "name">Alyse Kwok</h5></div>
            </div>
            <div class = "chatEntry">
            <div class = "profile-placeholder"></div>
            <h5 class = "name">Ishaan Guha</h5>
                 </div>
            <div class = "chatEntry">
            <div class = "profile-placeholder"></div>
            <h5 class = "name">Elaine Chen</h5> </div>
            
            <div class = "chatEntry">
            <div class = "profile-placeholder"></div> 
            <h5 class = "name">Eddy Wang</h5></div>
         </div>
            
               
        </div>
    )
}
export default Messages;