import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ProfilePic from "./assets/profilepic.png";

import './css/Profile.css';
class Profile extends Component {
    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };
  render() {
      const { user } = this.props.auth;
    return (
        <div class ="profile-page">
            <div class ="profile-rectangle"></div>
            <div class ="screen-background"></div>
            <div class ="camera-icon"></div>
            <div class ="user-customer-rectangle"></div>
            <div class ="profile-box">
                <img src ={ ProfilePic }></img>
                <h3>Welcome {user.username}!</h3>
                <p>Name</p>
                <p>Email</p>
                <p>Phone Number</p>
                <button class ="button buttonSave">SAVE</button>
            </div>
            <div class ="cook-user-box">
                <h3 class="hi">Are you a cook or a user?</h3>
                <button class ="button buttonCook">COOK</button>
                <button class="button buttonUser">USER</button>
            </div>
            <div class ="blurb-box">
                <h3 class="infotext">Info Blurb</h3>
                <div class ="inputblob">
                    <p>Hi, my name is...</p>
                </div>
            </div>
            <div class ="buttons">
                <button onClick={this.onLogoutClick} class="button buttonCook">LOGOUT</button>
            </div>
            <div class ="profile-image">
                <img src = {user.thumbnail}></img>
            </div>
        </div>
    )
}
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Profile);