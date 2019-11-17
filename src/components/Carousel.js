import React, { useState, useEffect } from "react";
import CarouselView from "./CarouselView";
import "../css/components/_carousel.scss";
import "../css/components/_body.scss";

let imageArray = [
  "https://picsum.photos/600/600",
  "https://picsum.photos/600/600",
  "https://picsum.photos/600/600",
  "https://picsum.photos/600/600",
  "https://picsum.photos/600/600",
  "https://picsum.photos/600/600"
];

function Carousel() {
  const [translateX, setTranslateX] = useState("");
  const [counter, setCounter] = useState(1);
  const [transition, setTransition] = useState(`.3s ease-in-out`);

  //Handle Change Function for Previous Button
  const prevBtn = () => {
    setCounter(counter - 1);
    if (counter <= 1) {
      setTimeout(() => {
        setTransition("none");
        setCounter(imageArray.length - 1);
      }, 290);
    } else {
      setTransition("0.3s ease-in-out");
    }
  };

  //Handle Change Function for Next Button
  const nextBtn = () => {
    setCounter(counter + 1);
    if (counter >= imageArray.length - 1) {
      setTimeout(() => {
        setTransition("none");
        setCounter(1);
      }, 290);
    } else {
      setTransition("0.3s ease-in-out");
    }
  };

  useEffect(() => {
    setTranslateX(`translateX(${-600 * counter}px)`);
    console.log(counter);
  }, [counter]);

  return (
    <div className="carousel">
      <CarouselView
        slider={translateX}
        transition={transition}
        imageArray={imageArray}
        counter={counter}
        setTransition={setTransition}
      />
      <button onClick={() => prevBtn()}>Prev</button>
      <button onClick={() => nextBtn()}>Next</button>
    </div>
  );
}

export default Carousel;
