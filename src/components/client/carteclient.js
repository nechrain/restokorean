import React from "react";
import "./carte.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Panier from "../../components/client/panier";
class Carteclient extends React.Component {
  state = {
    carte: [],

    el: "",
  };

  //*************get card*****************// */
  componentDidMount() {
    axios
      .get("http://localhost:8000/menu")

      .then((res) => this.setState({ carte: res.data }));
  }
  //*****************quantity increment******************** */

  addOrder = (el) => {
    axios
      .post("http://localhost:8000/orders", el)
      .then((res) => console.log(res.data));
  };

  //********************************************************************************* */
  //********************************************************************************* */
  //********************************************************************************* */
  render() {
    return (
      <div>
        <center>
          <h1>we have got the best plats</h1>
        </center>
        <hr></hr>

        <div className="card-group menu">
          {this.state.carte.map((el) => (
            <div>
              <div className="card client">
                <center>
                  <h3 className="card-title">{el.title}</h3>
                </center>
                <img className="imagecarte" src={el.image} alt="img" />
                <div className="card-text">{el.description}</div>
                <center>
                  <div>
                    <h4>Price:{el.price} TND </h4>{" "}
                  </div>
                </center>

                <center>
                  <button
                    className="commande"
                    onClick={() => this.addOrder(el)}
                  >
                    Commander
                  </button>
                </center>
              </div>
            </div>
          ))}
        </div>
        <Panier />
      </div>
    );
  }
}
export default Carteclient;
