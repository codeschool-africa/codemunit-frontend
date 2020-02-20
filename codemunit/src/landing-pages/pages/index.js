import React, { useEffect } from "react";

//components
import Header from "../components/header";
import Services from "../components/services";
import Curriculum from "../components/curriculum";
import WhyUs from "../components/why";
import Blog from "../components/blog";
import Hire from "../components/hire";
import Mentor from "../components/mentor";
import Footer from "../../components/footer";

//styles
import "../../styles/landing_page/style.css";

import bannerBg from "../../images/banner_bg.png";

const Home = ({ ...rest }) => {
  useEffect(() => {
    document.title = `Home - Kodemunit`;
  });
  return (
    <div id='landing-page'>
      <Header
        title='Welcome to Kodemunit'
        description='We monitor and guide software development learners by bringing together learners and experts in a community. We equip software developer with skills and knowledge necessary to get software developer jobs'
        image={bannerBg}
        imgAlt='banner bg'
      />
      <main>
        <Services />
        <Curriculum />
        <WhyUs />
        <Blog/>
        <Mentor/>
        <Hire/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
