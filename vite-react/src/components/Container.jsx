import React, { Component } from "react";

class Container extends Component {
  render() {
    const { children } = this.props;

    return <div className="w-screen h-full bg-white">{children}</div>;
  }
}

export default Container;
