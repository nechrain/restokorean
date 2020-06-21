import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Label } from "reactstrap";

class Signin extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:8000/utilisateur").then((res) => {
      this.setState({ users: res.data });
      console.log(res.data);
    });
  }
  verif() {
    const x = this.state.users.filter(
      (el) =>
        el.email === this.state.email && el.password === this.state.password
    );

    if (x.length !== 0 && x[0].role === "client") {
      window.location.pathname = "/client";
    } else if (x.length !== 0 && x[0].role === "admin") {
      window.location.pathname = "/admin";
    } else {
      alert("utilisateur nexiste pas ");
    }
  }

  render() {
    return (
      <div>
        <lable>Email</lable>
        <input onChange={(e) => this.setState({ email: e.target.value })} />
        <Label>Password</Label>
        <input onChange={(e) => this.setState({ password: e.target.value })} />
        <button onClick={() => this.verif()}>Sign in</button>
      </div>
    );
  }
}
export default Signin;
