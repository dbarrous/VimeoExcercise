import React from "react";
import Image from "./Image";
import Description from "./Description";
import "../css/components/_videoInfo.scss";

export const VideoInfo = props => {
  //VideoInfo component recieves the props of imageSrc, imageAlt, title and description then assigns them to the proper components. Then decides whether to display it in reverse order based of the boolean prop displayReverse.

  const { imageSrc, imageAlt, title, description, displayReverse } = props;

  const normalDisplay = (
    <div className="videoInfo">
      <Image src={imageSrc} alt={imageAlt} />

      <Description title={title} description={description} />
    </div>
  );

  const reverseDisplay = (
    <div className="videoInfo">
      <Description title={title} description={description} />

      <Image src={imageSrc} alt={imageAlt} />
    </div>
  );
  return <>{displayReverse === true ? reverseDisplay : normalDisplay}</>;
};

export default VideoInfo;
