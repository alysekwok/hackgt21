import React from "react";
import './css/Profile.css';

const Profile = () => {
    return (
        <div class ="profile-page">
            <h3>Are you a cook or a user?</h3>
            <h3>Info Blurb</h3>
            <h3>My Profile</h3>
            <div class ="profile-rectangle"></div>
            <div class ="screen-background"></div>
            <div class ="camera-icon"></div>
            <div class ="user-customer-rectangle"></div>
            <div class ="profile-box"></div>
            <div class ="cook-user-box"></div>
            <div class ="blurb-box"></div>
            <div class ="buttons">
                <button>COOK</button>
                <button>USER</button>
            </div>
            <div class ="profile-image"></div>
        </div>
    )
}

export default Profile;
