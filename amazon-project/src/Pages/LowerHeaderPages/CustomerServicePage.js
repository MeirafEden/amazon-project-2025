import React from "react";
import "./LowerHeaderPage.css";

function CustomerServicePage() {
  const services = [
    {
      id: 1,
      name: "Help 1",
      img: "https://via.placeholder.com/200?text=Help+1",
    },
    {
      id: 2,
      name: "Help 2",
      img: "https://via.placeholder.com/200?text=Help+2",
    },
    {
      id: 3,
      name: "Help 3",
      img: "https://via.placeholder.com/200?text=Help+3",
    },
  ];

  return (
    <div className="lowerHeaderPage">
      <h2>Customer Service</h2>
      <div className="productGrid">
        {services.map((s) => (
          <div key={s.id} className="productCard">
            <img src={s.img} alt={s.name} />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerServicePage;
