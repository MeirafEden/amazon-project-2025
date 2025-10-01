import React from "react";
import "./LowerHeaderPage.css";

function AmazonHaulPage() {
  const products = [
    {
      id: 1,
      name: "Amazon Haul 1",
      img: "https://via.placeholder.com/200?text=Amazon+Haul+1",
    },
    {
      id: 2,
      name: "Amazon Haul 2",
      img: "https://via.placeholder.com/200?text=Amazon+Haul+2",
    },
    {
      id: 3,
      name: "Amazon Haul 3",
      img: "https://via.placeholder.com/200?text=Amazon+Haul+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Amazon Haul</h2>
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

export default AmazonHaulPage;
