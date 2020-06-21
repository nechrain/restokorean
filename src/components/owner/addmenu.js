import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Addmenu extends React.Component {
  state = {
    modal: false,
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>
          {" "}
          <h1> add card +</h1>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>card details</ModalHeader>
          <ModalBody>
          <div className="container">
        <div><input type="text" name="title" placeholder="title"  onChange={this.props.getinput} /></div>
       <div> <input type="text" name="image"  placeholder="image" onChange={this.props.getinput} /></div>
       <div><input type="text"  name="price" placeholder="price"  onChange={this.props.getinput} /></div>
       
       </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.addCard}>
             save card
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Addmenu;
