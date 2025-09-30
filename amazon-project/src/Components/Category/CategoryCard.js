import React from "react";
import styles from "./CategoryCard.module.css";

function CategoryCard({ data }) {
 

    return (
      <div className={styles.card}>
        {/* <h2 className={styles.title}>{data.title}</h2> */}
        <img src={data.imgLink} alt={data.title} className={styles.img} />
        <p className={styles.name}>{data.name}</p>
      </div>
    );
}

export default CategoryCard;
