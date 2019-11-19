import React from "react";
import "../../css/components/_slide.scss";
import "../../css/components/_body.scss";

const CarouselSlide = props => {
  //This component contains the Slide Layout for the Carousel
  const { movieInfo } = props;
  const { name, image, description, themeColor } = movieInfo;

  const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <div className="slide" style={style}>
      <div className="backgroundOverlay"></div>

      <div className="content">
        <div className="slidePoster">
          <img src={image} alt={name} />
        </div>
        <div className="slideDescription">
          <h2 className="slideDescriptionTitle">{name}</h2>
          <p className="slideDescriptionParagraph">{description}</p>
          <div className="descriptionButtons">
            <div className="buyButton" style={{ backgroundColor: themeColor }}>
              <p>
                <i className="far fa-play-circle"></i>
                Buy Now
              </p>
            </div>
            <div className="trailerButton">
              <p>Watch Trailer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
