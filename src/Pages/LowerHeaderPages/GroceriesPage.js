import React from "react";
import "./LowerHeaderPage.css";

function GroceriesPage() {
  const products = [
    {
      id: 1,
      name: "Groceries 1",
      img: "https://via.placeholder.com/200?text=Groceries+1",
    },
    {
      id: 2,
      name: "Groceries 2",
      img: "https://via.placeholder.com/200?text=Groceries+2",
    },
    {
      id: 3,
      name: "Groceries 3",
      img: "https://via.placeholder.com/200?text=Groceries+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Groceries</h2>
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

export default GroceriesPage;
