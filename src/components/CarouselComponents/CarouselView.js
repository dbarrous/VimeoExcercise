import React from "react";
import "../../css/components/_carousel.scss";
import CarouselSlide from "./CarouselSlide";
import uuid from "uuid";

function CarouselView(props) {
  //This component handles the view of the carousel as well as the controlling when it needs to apply "none" to the transition in order to create the "infinite" effect
  const { slider, transition, movieArray } = props;
  const style = {
    transform: slider,
    transition: transition
  };

  return (
    <div className="carouselView" style={style}>
      <CarouselSlide movieInfo={movieArray[movieArray.length - 1]} />
      {movieArray.map(movie => (
        <CarouselSlide movieInfo={movie} key={uuid()} />
      ))}
      <CarouselSlide movieInfo={movieArray[0]} />
    </div>
  );
}

export default CarouselView;
