import React from "react";

import Header from "../components/header";

//styles
import "../../styles/landing_page/style.css";

const Home = ({ ...rest }) => {
  return (
    <div id='landing-page'>
      <Header />
      <main>Hello from main</main>
    </div>
  );
};

export default Home;
