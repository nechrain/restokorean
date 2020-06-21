import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Menu from "./components/owner/menu";
import Carteclient from "./components/client/carteclient";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Panier from "./components/client/panier";
import Signin from "./components/Navbar/singin";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Route exact path="/" component={Signin} />
          <Route path="/client" component={Carteclient} />
          <Route path="/admin" component={Menu} />
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
