import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/navbar.css";

function navbar() {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">My Shopping</span>
        <div className="cart">
          <span>
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
