import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ info }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card__image">
        <img src={info.image} alt={info.title} />
      </div>
      <div className="card__content">
        <div>
          <p className="card-title">
            {info["title"].length > 50
              ? info["title"].substring(0, 50) + "..."
              : info["title"]}
          </p>
          <p className="card-category">{info.category}</p>
        </div>
        <div className="card__contentData">
          <p className="card-price">$ {info.price}</p>
          <p className="card-rating">
            ⭐ {info.rating.rate}
            <span> ({info.rating.count})</span>
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart", {state:info});
          }}
          className="card-btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
