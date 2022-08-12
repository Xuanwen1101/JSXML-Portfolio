import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
  }

  // update the checked attribute from the props or the state
  checkboxHandler(e) {
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {
    return (
      <div id="main-menu">
        <nav id="menu-dropdown" aria-label="Main Navigation">
          {/* use onChange handler for the checked attribute */}
          <input
            id="toggle"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.checkboxHandler}
          />
          <h2>Menu</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
