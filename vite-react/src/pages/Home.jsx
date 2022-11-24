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
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    const result = this.state.data;
    const name = this.props.location?.state?.name;
    return (
      <Container>
        <Navbar
          title="Alterra Shop"
          home={() => this.props.navigate("/")}
          about={() => this.props.navigate("/about")}
          contact={() => this.props.navigate("/contact")}
          profile={name ? `Hi, Welcome ${name}` : `You are not register yet!`}
        />
        <div className="flex flex-wrap">
          {result.map((item) => {
            return (
              <Card
                keys={item.id}
                title={item.title}
                text={`text-black`}
                description={item.description.substring(0, 120) + `...`}
                image={item.image}
                onClick={() =>
                  this.props.navigate("/detail", {
                    state: {
                      id: item.id,
                    },
                  })
                }
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
