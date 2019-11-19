import React from "react";
import TopContainer from "./ResponsiveSiteComponents/TopContainer";
import BottomContainer from "./ResponsiveSiteComponents/BottomContainer";
import "../css/components/_body.scss";
import responsiveSite from "../data/responsiveSite";

export const App_Responsive = () => {
  //Main Responsive Site Component
  return (
    //Body of the Webpage

    <div id="body">
      <TopContainer data={responsiveSite.shift()} />
      <BottomContainer data={responsiveSite} />
    </div>
  );
};

export default App_Responsive;
