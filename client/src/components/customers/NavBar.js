import React from 'react';
import {  Link } from "react-router-dom";
import './NavBar.css';
const NavBar= () =>{
    return (
    <div id = "navigationBar">
        <ul>
        <div id = "rightBar">
        <li>
      <button id = "request-button">REQUEST</button>
      </li>
      <li>
      <button id = "list-button">LIST</button>
      </li>
      <li>
        <Link to="/profile">PROFILE</Link>
      </li>
      <li>
        <Link to="/messages">MESSAGES</Link>
      </li>
      <li>
        <Link to="/pantry">PANTRY</Link>
      </li>
      <li>
        <Link to="/">HOME</Link>
      </li>
      </div>
      <div id = "leftBar">
      <li>
          <h1 id = "logo">DormEats</h1>
      </li>
      </div>
      
      
      </ul>
    </div>
    );
  }
  export default NavBar;