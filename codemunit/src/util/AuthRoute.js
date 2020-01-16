import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, auth: { isAuthenticated, token}, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            token === null ? <Redirect to="/signin" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = (state) => ({
    // isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
});

AuthRoute.propTypes = {
    user: PropTypes.object,
    auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AuthRoute);