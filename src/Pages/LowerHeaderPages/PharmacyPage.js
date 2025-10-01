import React from "react";
import "./LowerHeaderPage.css";

function PharmacyPage() {
  const products = [
    {
      id: 1,
      name: "Pharmacy 1",
      img: "https://via.placeholder.com/200?text=Pharmacy+1",
    },
    {
      id: 2,
      name: "Pharmacy 2",
      img: "https://via.placeholder.com/200?text=Pharmacy+2",
    },
    {
      id: 3,
      name: "Pharmacy 3",
      img: "https://via.placeholder.com/200?text=Pharmacy+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Pharmacy</h2>
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

export default PharmacyPage;
