import React, { Component } from "react";
import Container from "../components/Container";
import api from "../services/api";
import { withRouter } from "../withRouter";

class Detail extends Component {
  state = {
    data: "",
  };

  async getProducts() {
    const id = this.props.location.state.id;
    await api
      .getProducts(id)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    console.log("after render :", this.state.data);

    return (
      <Container>
        {/* <button
          className="btn btn-secondary"
          onClick={() => this.props.navigate(-1)}
        >
          Back to Home
        </button> */}

        <div className="flex flex-row">
          <div className="ml-20">
            <img width={400} height={400} src={this.state.data.image} />
          </div>
          <div className="mx-48">
            <p className="text-black font-semibold mb-10">
              {this.state.data.title}
            </p>
            <p className="text-black">{this.state.data.description}</p>
            <p className="text-black font-semibold mt-10">
              Price : ${this.state.data.price}
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Detail);
