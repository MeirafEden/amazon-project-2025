import React from "react";
import "./LowerHeaderPage.css";

function ShopByInterestPage() {
  const products = [
    {
      id: 1,
      name: "Interest 1",
      img: "https://via.placeholder.com/200?text=Interest+1",
    },
    {
      id: 2,
      name: "Interest 2",
      img: "https://via.placeholder.com/200?text=Interest+2",
    },
    {
      id: 3,
      name: "Interest 3",
      img: "https://via.placeholder.com/200?text=Interest+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Shop By Interest</h2>
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

export default ShopByInterestPage;
