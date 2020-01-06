import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated === false ? <Redirect to="/account" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

AuthRoute.propTypes = {
    user: PropTypes.object
};

export default connect(mapStateToProps)(AuthRoute);