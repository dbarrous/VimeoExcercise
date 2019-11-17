import React, { useState } from "react";
import "../css/components/_carousel.scss";

function CarouselView(props) {
  const { slider, transition, imageArray, counter, setTransition } = props;
  const style = {
    transform: slider,
    transition: transition
  };

  return (
    <div className="carouselView" style={style}>
      <img src={props.imageArray[props.imageArray.length - 1]} />

      <img src={props.imageArray[0]} />
      <img src={props.imageArray[0]} />
      <img src={props.imageArray[0]} />
      <img src={props.imageArray[0]} />
      <img src={props.imageArray[0]} />

      <img src={props.imageArray[0]} />
    </div>
  );
}

export default CarouselView;
