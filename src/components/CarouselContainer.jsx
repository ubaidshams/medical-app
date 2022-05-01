import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

let CarouselContainer = () => {
  return (
    <div className="carouselContainer">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        dynamicHeight={true}
        showArrows={true}
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
      >
        <div className="bubbles">
          <section className="carouselInfo">
            <h4>best in our field</h4>
            <h2>medical laboratory</h2>
            <h1>technicians</h1>
          </section>
        </div>

        <div className="doc">
          <section className="carouselInfo">
            <h4>best in our field</h4>
            <h2>biotechnology for</h2>
            <h1>the new age</h1>
          </section>
        </div>
        <div className="testing">
          <section className="carouselInfo">
            <h4>best in our field</h4>
            <h2>state-of-the-art</h2>
            <h1>laboratories</h1>
          </section>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselContainer;
