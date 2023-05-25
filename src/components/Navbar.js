import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="navbar-main">
        <h1>Kurslarım</h1>
        <div className="navbar-basket">
          <div className="basket-number">
            <p>{quantity}</p>
          </div>
          <SlBasket className="basket-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
