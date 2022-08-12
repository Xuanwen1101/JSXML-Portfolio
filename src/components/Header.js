import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="flex-container-header">
          <span id="logo">
            <a href="/">
              <img
                src="images/logo.png"
                alt="logo"
                title="Xuanwen Zheng's Website"
                height="120"
              />
            </a>
          </span>
          <Nav />
        </div>
      </header>
    );
  }
}
export default Header;
