import React from "react";
import logo from "../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../app/store";

function Header() {
  const cart = useSelector((store) => store.cart.items)
  return (
    <div className="header">
      <Link className="link" to='/'><img className="logo" src={logo} alt="swiggy logo" /></Link>
      <ul className="header-list">
        <li className="header-item">
            <IoSearch />
          <span>Search</span>
        </li>
        <Link className="link" to='/cart'>
        <li className="header-item">
            <FiShoppingCart />
          <span>Cart - {cart.length}</span>
        </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
