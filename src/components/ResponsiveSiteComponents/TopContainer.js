import React from "react";
import VideoInfo from "./VideoInfo";
import "../../css/components/_topContainer.scss";

export const TopContainer = props => {
  const { data } = props;
  return (
    //Top Container Component that contains singular VideoInfo Component
    <div id="topContainer">
      <VideoInfo
        imageSrc={data.imageSrc}
        imageAlt={data.imageAlt}
        title={data.title}
        description={data.description}
      />
    </div>
  );
};

export default TopContainer;
