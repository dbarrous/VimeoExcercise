import React from "react";
import "../css/components/_description.scss";

export const Description = props => {
  //Description component that recieves the title and description text as props from parent component

  const { title, description } = props;

  return (
    <div className={"description"}>
      <h2 className={"descriptionTitle"}>{title}</h2>
      <p className={"descriptionParagraph"}>{description}</p>
    </div>
  );
};

export default Description;
