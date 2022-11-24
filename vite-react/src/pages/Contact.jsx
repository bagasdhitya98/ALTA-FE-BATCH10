import React, { Component } from "react";
import { withRouter } from "../withRouter";

import Container from "../components/Container";
import Navbar from "../components/Navbar";

class Contact extends Component {
  render() {
    return (
      <Container>
        <Navbar
          title="Contact"
          home={() => this.props.navigate("/")}
          about={() => this.props.navigate("/about")}
          contact={() => this.props.navigate("/contact")}
        />
      </Container>
    );
  }
}

export default withRouter(Contact);
