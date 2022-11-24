import React, { Component } from "react";
import Container from "../components/Container";
import { withRouter } from "../withRouter";

class Detail extends Component {
  render() {
    return (
      <Container>
        <div>
          <p className="text-black">{this.props.location.state.data}</p>
        </div>
      </Container>
    );
  }
}

export default withRouter(Detail);
