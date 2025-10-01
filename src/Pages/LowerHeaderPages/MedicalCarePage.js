import React from "react";
import "./LowerHeaderPage.css";

function MedicalCarePage() {
  const products = [
    {
      id: 1,
      name: "Medical Care 1",
      img: "https://via.placeholder.com/200?text=Medical+Care+1",
    },
    {
      id: 2,
      name: "Medical Care 2",
      img: "https://via.placeholder.com/200?text=Medical+Care+2",
    },
    {
      id: 3,
      name: "Medical Care 3",
      img: "https://via.placeholder.com/200?text=Medical+Care+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Medical Care</h2>
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

export default MedicalCarePage;
