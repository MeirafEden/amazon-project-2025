import React from "react";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";
import { categoryInfos } from "./CategoryAllInfo";

function Category() {
  return (
    <section className={styles.carousel}>
      <div className={styles.card}>
        <div className={styles.category_wrapper}>
          {categoryInfos.map((info, index) => (
            <CategoryCard key={index} data={info} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
