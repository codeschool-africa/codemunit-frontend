import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../redux/actions/auth";
import "../styles/dashboard/style.css"

//pages
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

const Dashboard = ({ auth: { isAuthenticated, loading, user }, logout }) => {
        return (
            <div className="dashboard dashboard-home">
                <Sidebar/>
                <Main/>
                <div className="aside-right">
                    this is another container to be aligned on the right hand side for additional features
                    <a href="#!" onClick={logout} className="btn-primary">logout</a>
                </div>
                <h1>Welcome {user.firstname}</h1>
                <img src={user.avatar} />
                <span>{user._id}</span>
                <span>{user.avatar}</span>
            </div>
        )
}

const mapStateToProps = state => ({
  auth: state.auth,
});

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(Dashboard);