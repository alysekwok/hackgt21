import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
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
            <h3>{user.username}</h3>
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
                <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
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