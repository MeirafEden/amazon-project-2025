import React from "react";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "./img/data"; // make sure this matches your export
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div className={classes.carousel_wrapper}>
      {Object.keys(carouselData).map((category) => (
        <div key={category} className={classes.carousel_section}>
          {/* <h2 className={classes.category_title}>{category}</h2> */}
          <div className={classes.carousel_container}>
            <Carousel
              autoPlay ={true}
              infiniteLoop={true}
              showIndicators
              showThumbs={false}
             
            >
              {carouselData[category].map((imgSrc, index) => (
                <div key={index}>
                  <img src={imgSrc} alt={`${category}-${index + 1}`} />
                </div>
              ))}
            </Carousel>
            {/* Gradient overlay */}
            <div className={classes.hero_img}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarouselEffect;
