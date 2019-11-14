import React from "react";
import VideoInfo from "./VideoInfo";
import "../css/components/_bottomContainer.scss";
export const BottomContainer = () => {
  return (
    <div id={"bottomContainer"}>
      <VideoInfo
        imageSrc={"https://i.vimeocdn.com/video/589972810_530x315.jpg"}
        imageAlt={"Title Image of BEAMS"}
        title={"BEAMS"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        displayReverse={true}
      />
      <VideoInfo
        imageSrc={"https://i.vimeocdn.com/video/590587169_530x315.jpg"}
        imageAlt={"Title Image of Move 2"}
        title={"move 2"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </div>
  );
};

export default BottomContainer;
