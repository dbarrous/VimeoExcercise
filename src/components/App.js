import React from "react";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import "../css/components/_body.scss";

export const App = () => {
  return (
    //   Body of the Webpage
    <div id="body">
      <TopContainer />
      <BottomContainer />
    </div>
  );
};

export default App;
