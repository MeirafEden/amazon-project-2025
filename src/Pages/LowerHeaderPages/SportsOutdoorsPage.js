import React from "react";
import "./LowerHeaderPage.css";

function SportsOutdoorsPage() {
  const products = [
    {
      id: 1,
      name: "Sports Item 1",
      img: "https://via.placeholder.com/200?text=Sports+1",
    },
    {
      id: 2,
      name: "Sports Item 2",
      img: "https://via.placeholder.com/200?text=Sports+2",
    },
    {
      id: 3,
      name: "Sports Item 3",
      img: "https://via.placeholder.com/200?text=Sports+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Sports & Outdoors</h2>
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

export default SportsOutdoorsPage;
