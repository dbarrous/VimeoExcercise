import React from "react";
import VideoInfo from "./VideoInfo";
import "../../css/components/_bottomContainer.scss";
export const BottomContainer = props => {
  const { data } = props;
  return (
    //Bottom Container Component that contains the two VideoInfo Components

    <div id={"bottomContainer"}>
      {data.map(data => (
        <VideoInfo
          imageSrc={data.imageSrc}
          imageAlt={data.imageAlt}
          title={data.title}
          description={data.description}
          displayReverse={data.displayReverse}
        />
      ))}
    </div>
  );
};

export default BottomContainer;
