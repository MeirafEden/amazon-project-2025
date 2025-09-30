import React from "react";
import "./LowerHeaderPage.css";

function AmazonBasicsPage() {
  const products = [
    {
      id: 1,
      name: "Amazon Basics 1",
      img: "https://via.placeholder.com/200?text=Amazon+Basics+1",
    },
    {
      id: 2,
      name: "Amazon Basics 2",
      img: "https://via.placeholder.com/200?text=Amazon+Basics+2",
    },
    {
      id: 3,
      name: "Amazon Basics 3",
      img: "https://via.placeholder.com/200?text=Amazon+Basics+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Amazon Basics</h2>
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

export default AmazonBasicsPage;
