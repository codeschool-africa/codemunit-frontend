import React, { useEffect } from "react";

import Header from "../components/header";
import Services from "../components/services"

//styles
import "../../styles/landing_page/style.css";

const Home = ({ ...rest }) => {
  useEffect(() => {
    document.title = `Home - Kodemunit`;
  });
  return (
    <div id='landing-page'>
      <Header />
      <main>
        {/* <Services/> */}
      </main>
    </div>
  );
};

export default Home;
