import React from "react";
import "./LowerHeaderPage.css";

function RegistryPage() {
  const products = [
    {
      id: 1,
      name: "Registry Item 1",
      img: "https://via.placeholder.com/200?text=Registry+1",
    },
    {
      id: 2,
      name: "Registry Item 2",
      img: "https://via.placeholder.com/200?text=Registry+2",
    },
    {
      id: 3,
      name: "Registry Item 3",
      img: "https://via.placeholder.com/200?text=Registry+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Registry</h2>
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

export default RegistryPage;
