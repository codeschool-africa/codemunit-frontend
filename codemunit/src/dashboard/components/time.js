import React from "react";
import PropTypes from "prop-types";

const Time = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const today = new Date(),
    date = `${days[today.getDay()]}, ${
      months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
  return <span className="time">{date}</span>;
};

Time.propTypes = {};

export default Time;
