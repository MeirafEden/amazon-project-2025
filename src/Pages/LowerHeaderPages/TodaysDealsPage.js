import React from "react";
import "./LowerHeaderPage.css";

function TodaysDealsPage() {
  const products = [
    {
      id: 1,
      name: "Deal 1",
      img: "https://via.placeholder.com/200?text=Deal+1",
    },
    {
      id: 2,
      name: "Deal 2",
      img: "https://via.placeholder.com/200?text=Deal+2",
    },
    {
      id: 3,
      name: "Deal 3",
      img: "https://via.placeholder.com/200?text=Deal+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Today's Deals</h2>
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

export default TodaysDealsPage;
