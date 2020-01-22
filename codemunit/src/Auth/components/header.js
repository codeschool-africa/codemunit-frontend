import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//logo
import logo from "../../images/black-logo.png";
import { getProfile, updateProfile } from "../../redux/actions/profile";
import Alert from "../../components/alerts";

const Header = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  return (
    <div className='dashboard-header'>
      <nav>
        <div className='logo'>
          <Link to='/dashboard'>
            <img
              src={logo}
              alt='kodemunit logo'
              style={{
                height: "40px"
              }}
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/dashboard'>Link</Link>
          </li>
          <li>
            <Link to='/dashboard/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/dashboard'>Link</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
  });
  
Header.propTypes = {
    getProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  export default connect(mapStateToProps, { getProfile, updateProfile })(
    Header
  );
  
