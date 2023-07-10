import { Component } from "react";
import "./Navbar.css";
import "./SearchBar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItem">
        <h1 className="logo">OnlineStore</h1>
        <div className="MenuIcons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "Navmenu active" : "Navmenu"}>
          <li>
            <Link className="NavLinks" to="/home">
              <i className="fa-solid fa-house"></i>Home
            </Link>
          </li>
          <li>
            <Link className="NavLinks" to="/product">
              <i className="fa-solid fa-bag-shopping"></i>Product
            </Link>
          </li>
          <li>
            <div className="input-wrapper">
              
              <input type="text" placeholder="Type to search..." value=""></input>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
