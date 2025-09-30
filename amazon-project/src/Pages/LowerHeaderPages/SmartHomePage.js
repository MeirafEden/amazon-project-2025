import React from "react";
import "./LowerHeaderPage.css";

function SmartHomePage() {
  const products = [
    {
      id: 1,
      name: "Smart Device 1",
      img: "https://via.placeholder.com/200?text=Smart+1",
    },
    {
      id: 2,
      name: "Smart Device 2",
      img: "https://via.placeholder.com/200?text=Smart+2",
    },
    {
      id: 3,
      name: "Smart Device 3",
      img: "https://via.placeholder.com/200?text=Smart+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Smart Home</h2>
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

export default SmartHomePage;
