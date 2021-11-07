import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Cart() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart__data">
        <button className="cart-btn" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack size="20px" />
          Go back
        </button>
        <h3 className="cart-title">{state.title}</h3>
        <p className="cart-desc">{state.description}</p>
        <p className="cart-price">$ {state.price}</p>
        <p className="cart-rating">
          <span>⭐ {state.rating.rate}</span> rated <br />
          according to {state.rating.count} people
        </p>
      </div>
      <div className="cart__image">
        <img src={state.image} alt={state.title} />
      </div>
    </div>
  );
}

export default Cart;
