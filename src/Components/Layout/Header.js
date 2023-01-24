import React, { Fragment } from "react";
import './Header.css'

const Header = () => {

  return (
    <Fragment>
      <div className="navContainer">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h3 logo">Fetch NFTs by address</span>
        </div>
      </nav>
      </div>
    </Fragment>
  );
};

export default Header;
