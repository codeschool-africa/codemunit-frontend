import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, auth: { isAuthenticated, token, isAdmin }, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !isAuthenticated ? <Redirect to="/signin" /> : isAdmin ? <Redirect to="admin-panel"/> : <Component {...props} />
        }
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
});

AuthRoute.propTypes = {
    user: PropTypes.object,
    auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AuthRoute);