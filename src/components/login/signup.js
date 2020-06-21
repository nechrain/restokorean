import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

class Signin extends React.Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
  };
  toggle = () => this.setState({ modal: !this.state.modal });

  onchangename = (e) => {
    this.setState({ name: e.target.value });
  };
  onchangeemail = (e) => {
    this.setState({ email: e.target.value });
  };
  onchangepassword = (e) => {
    this.setState({ password: e.target.value });
  };
  signup = (element) => {
    let name = element.name;
    let email = element.email;
    let password = element.password;

    axios
      .post("http://localhost:8000/utilisateur", {
        name,
        email,
        password,
        role: "client",
      })
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          SignUp
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>

          <ModalBody>
            <div>
              <label>Name</label>
              <input
                onChange={this.onchangename}
                type="text"
                name="Name"
                placeholder="title"
              />
            </div>
            <div>
              <label>E-mail</label>
              <input
                onChange={this.onchangeemail}
                type="text"
                name="email"
                placeholder="image"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                onChange={this.onchangepassword}
                type="text"
                name="password"
                placeholder="price"
              />
            </div>
          </ModalBody>
          <div>
            <Button color="danger" onClick={() => this.signup(this.state)}>
              S'inscrire
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Signin;
