import React from "react";
import "./carte.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Panier extends React.Component {
  state = {
    panier: [],
    total:""
    
  };

  //************************fonction get ******************************* */
  componentDidMount() {
    axios
      .get("http://localhost:8000/orders")
      .then((res) => this.setState({panier:res.data}));
  }
//************************************incrementation****************** */

IncrementQuantity = (el) => {
  el.quantity++;
  
  console.log(el.quantity);
  axios.patch(`http://localhost:8000/orders/${el.id}`, el);
  window.location.reload();
};


//******************************decrementation**************************** */
DecrementQuantity = (el) => {
  el.quantity--;
  
  console.log(el.quantity);
  axios.patch(`http://localhost:8000/orders/${el.id}`, el);
  window.location.reload();
};

//****************************total********************** */



//****************************************************** */
  render() {
    return (
      <div className="quantity">
        <div className="menu container">
          {this.state.panier.map((el) => (
            <div>
              <div className="card resto">
                <center>
                  <h3 className="card-title">{el.title}</h3>
                </center>
                <img className="imagecarte" src={el.image} alt="img" />
                <div className="card-text">{el.description}</div>
                <div className="card-text">Price:{el.price} TND</div>
                <div className="quantity">
            <div>
              <button className="addbutton" onClick={() => this.IncrementQuantity(el)}>+</button>
            </div>
            <div>{el.quantity}</div>
            <div>
              <button className="minusbutton" onClick={() => this.DecrementQuantity(el)}>-</button>

            </div>
            </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    );
  }
}
export default Panier;
