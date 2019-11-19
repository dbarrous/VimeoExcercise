import React from "react";
import ReactDOM from "react-dom";
import App_Carousel from "./components/App_Carousel";
import App_ResponsiveSite from "./components/App_ResponsiveSite";

/*
To view each step, 
0.npm install (If First Time!)
1.npm start in the terminal
2.choose which step you would like to view
3.comment out the other one (with "//" in front of line)
4.view the results in browser
5.to view other step, uncomment the line which needs to be viewed
6.comment out the other line  (with "//" in front of line)
7.view the results in browser
*/

//Renders the Responsive Site (Step 1)
// ReactDOM.render(<App_ResponsiveSite />, document.getElementById("root"));

//Renders Carousel the Virtual DOM with the App (Step 2)
ReactDOM.render(<App_Carousel />, document.getElementById("root"));
