import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Notifications = () => {
  return (
    <div className='content'>
      <header>
        <div className="container">
          <h2>Hello from notification page</h2>
        </div>
      </header>
      <div className="main-content">
        <div className="container"></div>
      </div>
    </div>
  );
};

Notifications.propTypes = {};

export default Notifications;
