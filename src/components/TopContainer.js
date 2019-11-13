import React from "react";
import VideoInfo from "./VideoInfo";
import "../css/components/_topContainer.scss";

export const TopContainer = () => {
  return (
    //Top Container Component that contains singular VideoInfo Component

    <div id="topContainer">
      <VideoInfo
        imageSrc={"https://i.vimeocdn.com/video/590587169_530x315.jpg"}
        imageAlt={"Title Image of Monsoon 3"}
        title={"Monsoon iii"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </div>
  );
};

export default TopContainer;
