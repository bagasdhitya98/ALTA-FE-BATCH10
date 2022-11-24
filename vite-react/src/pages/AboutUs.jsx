import React, { Component } from "react";
import { withRouter } from "../withRouter";

import Container from "../components/Container";
import Navbar from "../components/Navbar";

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Navbar
          title="About Us"
          home={() => this.props.navigate("/")}
          about={() => this.props.navigate("/about")}
          contact={() => this.props.navigate("/contact")}
        />
      </Container>
    );
  }
}

export default withRouter(AboutUs);
