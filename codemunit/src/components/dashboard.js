import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const DashboardAuth = ({ auth: { user, isAuthenticated } }) => {
  return (
    <div>
      {!isAuthenticated ? (
        <Redirect to={`/account`} />
      ) : (
        <Redirect to={`/dashboard/${user._id}`} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

DashboardAuth.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(DashboardAuth);
