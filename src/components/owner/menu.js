import React from "react";
import './menu.css'
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Addmenu from "./addmenu";
import Editcard from "./editmenu";

class Menu extends React.Component {
  state = {
    menuu: [],
    title: "",
    price: "",
    image: "",
    
  };
  //*************get card*****************// */
  componentDidMount() {
    axios
      .get("http://localhost:8000/menu")

      .then((res) => this.setState({ menuu: res.data }));
  }
  //*****************delete card******************** */

  delete = (id) => {
    axios.delete(`http://localhost:8000/menu/${id}`).then((res) => {
      console.log(res.data);
      window.location.reload(false);
    });
  };


   //*****************add card******************** */
  getinput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addCard = () => {
    let newplate = {
title : this.state.title,
price : this.state.price,
image : this.state.image}
    axios.post("http://localhost:8000/menu", newplate)
      .then((res) => console.log("plate added"));
      window.location.reload();
  };

  //*****************edit card******************** */

  



//********************************************************************************* */
//********************************************************************************* */
//********************************************************************************* */
  render() {
    return (
      <div>
        <center>
          <h1>korean menu</h1>
        </center>
        <hr></hr>
        <Addmenu getinput={this.getinput} addCard={this.addCard} />
        <div className="menu container">
          {this.state.menuu.map((el) => (
            <div>
              <div className="card resto">
                <center>
                  <h3 className="card-title">{el.title}</h3>
                </center>
                <img className="imagecarte" src={el.image}  alt ="img"/>
                <div className="card-text">{el.description}</div>
                <div className="card-text">Price:{el.price} TND</div>
               
                <div className="menu container">
                <button
                  onClick={() => this.delete(el.id)}
                  type="button"
                  className="btn btn-warning"
                >
                  Enlever
                </button>
               <Editcard el={el} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Menu;
