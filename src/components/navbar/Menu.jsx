import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const Menu = () => {
  return (
    <div className="menuBlock">
      <Link to="">home</Link>
      <Link to="">pages</Link>
      <Link to="">doctors</Link>
      <Link to="">departments</Link>
      <Link to="">blog</Link>
      <Link to="">shop</Link>
      <Link to="">elements</Link>
      <Link to="">
        <AiOutlineShoppingCart className="linkIcon" />
      </Link>
      <Link to="">
        <AiOutlineSearch className="linkIcon" />
      </Link>
      <button>
        <IoIosMenu />
      </button>
    </div>
  );
};

export default Menu;
