import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOut>
      {/* Hero carousel */}
      <CarouselEffect />

      {/* Category cards */}
      <Category />

      {/* Product listing */}
      <Product />
    </LayOut>
  );
}

export default Landing;
