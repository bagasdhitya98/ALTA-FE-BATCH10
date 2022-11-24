import React, { Component } from "react";
import { withRouter } from "../withRouter";
import Container from "../components/Container";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSubmit(event) {
    alert(
      "Name : " +
        this.state.name +
        "Email : " +
        this.state.email +
        "Password : " +
        this.state.password
    );
    this.props.navigate("/", {
      state: {
        name: this.state.name,
      },
    });
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <div className="flex justify-center flex-wrap">
          <form onSubmit={() => this.handleSubmit()}>
            <label className="text-black flex flex-row items-center">
              Name
              <input
                className="input input-bordered w-48 max-w-xs bg-white shadow-xl ml-20 my-5"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              ></input>
            </label>
            <label className="text-black flex flex-row items-center">
              Email
              <input
                className="input input-bordered w-48 max-w-xs bg-white shadow-xl ml-20 my-5"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
            </label>
            <label className="text-black flex flex-row items-center">
              Password
              <input
                className="input input-bordered w-48 max-w-xs bg-white shadow-xl ml-20 my-5"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
            </label>
            <input
              className="bg-black w-60 h-10 rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(Register);
