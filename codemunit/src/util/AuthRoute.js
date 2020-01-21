import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthRoute = ({
  auth: { isAuthenticated, loading },
  component: Component,
  // children,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) =>
      !isAuthenticated && !loading ? (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: location }
          }}
        />
      ) : (
        <Component {...location} />
      )
    }
  />
);

const mapStateToProps = state => ({
  // isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

AuthRoute.propTypes = {
  // user: PropTypes.object,
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AuthRoute);
