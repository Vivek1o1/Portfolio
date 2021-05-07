import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <div className="circle">
          <div className="small-line"></div>
          <div className="big-line"></div>
        </div>
        <p className="my-name">Vivek singh</p>
      </div>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="#services">Services</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
