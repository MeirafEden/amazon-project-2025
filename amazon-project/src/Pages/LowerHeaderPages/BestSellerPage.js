import React from "react";
import "./LowerHeaderPage.css";

function BestSellerPage() {
  const products = [
    {
      id: 1,
      name: "Best Seller 1",
      img: "https://via.placeholder.com/200?text=Best+Seller+1",
    },
    {
      id: 2,
      name: "Best Seller 2",
      img: "https://via.placeholder.com/200?text=Best+Seller+2",
    },
    {
      id: 3,
      name: "Best Seller 3",
      img: "https://via.placeholder.com/200?text=Best+Seller+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Best Seller</h2>
      <div className="productGrid">
        {products.map((p) => (
          <div key={p.id} className="productCard">
            <img src={p.img} alt={p.name} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellerPage;
