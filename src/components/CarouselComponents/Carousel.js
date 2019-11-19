import React, { useState, useEffect } from "react";
import CarouselView from "./CarouselView";
import movieArray from "../../data/movieArray";

import "../../css/components/_carousel.scss";
import "../../css/components/_body.scss";

function Carousel() {
  //Carasoul Component that acts as the container for the infinite carasoul and controls the slide and position of each slide
  const [translateX, setTranslateX] = useState("");
  const [counter, setCounter] = useState(1);
  const [transition, setTransition] = useState(`.3s ease-in-out`);

  //Handle Change Function for Previous Button
  const prevBtn = () => {
    setCounter(counter - 1);
    if (counter <= 1) {
      setTimeout(() => {
        setTransition("none");
        setCounter(movieArray.length);
      }, 290);
    } else {
      setTransition("0.3s ease-in-out");
    }
  };

  //Handle Change Function for Next Button
  const nextBtn = () => {
    setCounter(counter + 1);
    if (counter >= movieArray.length) {
      setTimeout(() => {
        setTransition("none");
        setCounter(1);
      }, 290);
    } else {
      setTransition("0.3s ease-in-out");
    }
  };

  //Slides the Carasoul To The Proper Position
  useEffect(() => {
    setTranslateX(`translateX(${-1000 * counter}px)`);
  }, [counter]);

  //Renders the View and both the left and right arrows
  return (
    <div className="carousel">
      <CarouselView
        slider={translateX}
        transition={transition}
        movieArray={movieArray}
        counter={counter}
        setTransition={setTransition}
      />
      <img
        className="button buttonLeft"
        src="left-chevron.png"
        alt="Previous Button"
        onClick={() => prevBtn()}
      ></img>
      <img
        className="button buttonRight"
        src="right-chevron.png"
        alt="Next Button"
        onClick={() => nextBtn()}
      ></img>
    </div>
  );
}

export default Carousel;
