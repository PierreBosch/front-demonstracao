import React, { Component } from "react";
import axios from "axios";
// import { Container } from './styles';

export default class Home extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    axios.get("http://localhost:3000/usuarios").then(item => {
      this.setState({ user: item.data });
    });
  }
  render() {
    if (this.state.user) {
      return (
        <h1>
          {this.state.user.nome} <br />
          {this.state.user.idade}
        </h1>
      );
    }
  }
}
