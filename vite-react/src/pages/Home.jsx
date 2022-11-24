import React, { Component } from "react";
import { withRouter } from "../withRouter";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import CustomerService from "../components/CustomerService";
import Card from "../components/Card";
import api from "../services/api";

class Home extends Component {
  state = {
    data: [],
  };
  async getAllProducts() {
    await api
      .all_products()
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // nextPage() {
  //   let str = "Hello, I'm params from Home page";
  //   this.props.navigate("/about", {
  //     state: {
  //       data: str,
  //     },
  //   });
  // }

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    const result = this.state.data;
    console.log("result :", result);

    return (
      <Container>
        <Navbar
          title="Alterra Shop"
          home={() => this.props.navigate("/")}
          about={() => this.props.navigate("/about")}
          contact={() => this.props.navigate("/contact")}
        />
        {/* <button className="btn btn-secondary" onClick={() => this.nextPage()}>
          Sending Params
        </button> */}
        <div className="flex flex-wrap">
          {result.map((item) => {
            return (
              <Card
                title={item.title}
                text={`text-black`}
                description={item.description.substring(0, 120) + `...`}
                image={item.image}
              />
            );
          })}
        </div>
        <div className="mx-10 sticky z-10 bottom-10 flex justify-end">
          <CustomerService />
        </div>
      </Container>
    );
  }
}

export default withRouter(Home);
