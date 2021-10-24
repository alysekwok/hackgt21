import React from 'react';
import { Link } from "react-router-dom";
import './css/NavBar.css';

const NavBar= () =>{
    return (
    <div id = "navigationBar">
        <ul>
        <div id = "rightBar">
        <li id = "orderbtn">
            <Link to="/order">ORDER</Link>
      </li>
      <li>
      <Link to="/list">LIST</Link>
      </li>
      <li>
        <Link to="/register">PROFILE</Link>
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