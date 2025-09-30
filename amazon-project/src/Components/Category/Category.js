import React from "react";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";
import { categoryInfos } from "./CategoryAllInfo";

function Category() {
  return (
    <div className={styles.category_wrapper}>
      {categoryInfos.map((info, index) => (
        <CategoryCard key={index} data={info} />
      ))}
    </div>
  );
}

export default Category;
