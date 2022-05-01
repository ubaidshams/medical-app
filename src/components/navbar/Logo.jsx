import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logoBlock">
      <Link to="/">
        <img src={logo} alt="logo" width={60} height={60} />
        <h1>healthopedia</h1>
      </Link>
    </div>
  );
};

export default Logo;
