import React from "react";
import "../../css/components/_image.scss";

export const Image = props => {
  // Image component that recieves the image source and alternative text from parent component

  const { src, alt } = props;

  return (
    <div className={"imageBox"}>
      <img src={src} alt={alt} className={"image"} />
    </div>
  );
};

export default Image;
