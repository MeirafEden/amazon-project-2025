import React from "react";
import "./LowerHeaderPage.css";

function AmazonHomePage() {
  const products = [
    {
      id: 1,
      name: "Amazon Home 1",
      img: "https://via.placeholder.com/200?text=Amazon+Home+1",
    },
    {
      id: 2,
      name: "Amazon Home 2",
      img: "https://via.placeholder.com/200?text=Amazon+Home+2",
    },
    {
      id: 3,
      name: "Amazon Home 3",
      img: "https://via.placeholder.com/200?text=Amazon+Home+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Amazon Home</h2>
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

export default AmazonHomePage;
