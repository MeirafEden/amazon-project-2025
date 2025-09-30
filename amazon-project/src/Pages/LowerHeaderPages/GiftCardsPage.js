import React from "react";
import "./LowerHeaderPage.css";

function GiftCardsPage() {
  const products = [
    {
      id: 1,
      name: "Gift Card 1",
      img: "https://via.placeholder.com/200?text=Gift+1",
    },
    {
      id: 2,
      name: "Gift Card 2",
      img: "https://via.placeholder.com/200?text=Gift+2",
    },
    {
      id: 3,
      name: "Gift Card 3",
      img: "https://via.placeholder.com/200?text=Gift+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Gift Cards</h2>
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

export default GiftCardsPage;
