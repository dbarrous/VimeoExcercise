import React from "react";
import Image from "./Image";
import Description from "./Description";

export const VideoInfo = props => {
  //VideoInfo component recieves the props of imageSrc, imageAlt, title and description then assigns them to the proper components

  const { imageSrc, imageAlt, title, description } = props;

  return (
    <div className="videoInfo">
      <Image src={imageSrc} alt={imageAlt} />
      <Description title={title} description={description} />
    </div>
  );
};

export default VideoInfo;
