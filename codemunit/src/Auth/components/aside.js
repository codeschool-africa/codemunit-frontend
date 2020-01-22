import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//logo
import logo from "../../images/black-logo.png";
import { getProfile, updateProfile } from "../../redux/actions/profile";
import Alert from "../../components/alerts";

const Aside = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  return (
    <aside className='side-nav'>
        <div className='logo'>
            <img
              src={user.avatar}
              alt='kodemunit logo'
              style={{
                height: "40px"
              }}
            />
        </div>
    </aside>
  );
};


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
  });
  
Aside.propTypes = {
    getProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  export default connect(mapStateToProps, { getProfile, updateProfile })(
    Aside
  );
  
