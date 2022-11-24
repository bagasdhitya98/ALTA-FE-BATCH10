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
        <div>
          <p className="text-black">{this.props.location.state.data}</p>
        </div>
      </Container>
    );
  }
}

export default withRouter(AboutUs);
