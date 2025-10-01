import React from "react";
import "./LowerHeaderPage.css";

function NewReleasesPage() {
  const products = [
    {
      id: 1,
      name: "New Release 1",
      img: "https://via.placeholder.com/200?text=New+Release+1",
    },
    {
      id: 2,
      name: "New Release 2",
      img: "https://via.placeholder.com/200?text=New+Release+2",
    },
    {
      id: 3,
      name: "New Release 3",
      img: "https://via.placeholder.com/200?text=New+Release+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>New Releases</h2>
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

export default NewReleasesPage;
