import React from "react";
import "./LowerHeaderPage.css";

function MusicPage() {
  const products = [
    {
      id: 1,
      name: "Music 1",
      img: "https://via.placeholder.com/200?text=Music+1",
    },
    {
      id: 2,
      name: "Music 2",
      img: "https://via.placeholder.com/200?text=Music+2",
    },
    {
      id: 3,
      name: "Music 3",
      img: "https://via.placeholder.com/200?text=Music+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Music</h2>
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

export default MusicPage;
