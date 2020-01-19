import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AdminRoute = ({ component: Component, auth: { isAdmin, token}, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !isAdmin ? <Redirect to="/dashboard" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = (state) => ({
    auth: state.auth
});

AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AdminRoute);