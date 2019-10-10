import React from "react";
import { Link } from "react-router-dom";
import Header from "../landing-page/components/Header"
import Banner from "../landing-page/components/Banner"

class Error extends React.Component {
  componentDidMount() {
    document.title = "Error 404 - Page Not Found";
  }
  render() {
    return (
        <Header>
          <Banner
            title="Oooops!!! Page Not Found"
          >
            <div className="btn">
              <Link to="/" className="btn-primary">
                Go back to home page
              </Link>
            </div>
          </Banner>
        </Header>
    );
  }
}

export default Error;