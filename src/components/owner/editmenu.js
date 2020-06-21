import React from "react";
import "./menu.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

class Editcard extends React.Component {
  state = {
    modal: false,
    title: this.props.el.title,
    image: this.props.el.image,
    price: this.props.el.price,
    id: this.props.el.id,
  };
  //******************************on change pour le edited****************** */
  onchangetitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onchangeimage = (e) => {
    this.setState({ image: e.target.value });
  };
  onchangeprice = (e) => {
    this.setState({ price: e.target.value });
  };

  //*******************************************post**************************** */
  editedcard = (element) => {
    let title = element.title;
    let image = element.image;
    let price = element.price;

    axios
      .patch(`http://localhost:8000/menu/${element.id}`, {
        title,
        image,
        price,
      })
      .then((res) => console.log(res.data), window.location.reload());
  };

  //************************************** */
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button className="boutonedit" onClick={this.toggle}>
          {" "}
          <h1> edit card</h1>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>card details</ModalHeader>
          <ModalBody>
            <div className="container">
              <div>
                <input
                  type="text"
                  placeholder="title"
                  defaultValue={this.props.el.title}
                  onChange={this.onchangetitle}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="image"
                  defaultValue={this.props.el.image}
                  onChange={this.onchangeimage}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="price"
                  defaultValue={this.props.el.price}
                  onChange={this.onchangeprice}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editedcard(this.state)}>
              save card
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Editcard;
