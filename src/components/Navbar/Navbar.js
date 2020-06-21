import React, { Component } from "react";
import "./Navbar.css";
import Logo from "./coreesud.jpg";
import Signup from "./../login/signup";
import { Modal } from "reactstrap";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
       
        <div>
          <img className="logos" src={Logo} alt="logo" />
        </div>

        <div>
          <ul className="liste">
            <li>Home </li>
            <li>Client</li>
            <li> Panier </li>
          
          </ul>
        </div>
        <Signup />
      </div>
    );
  }
}
export default Navbar;
