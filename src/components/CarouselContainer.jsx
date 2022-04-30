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
        <div>
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h9-slider-image-1b.jpg" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            delectus neque ratione velit, veniam nisi harum, ex optio earum iure
            rem veritatis. Quibusdam sapiente saepe nisi quisquam? Tempore,
            labore autem?
          </p>
        </div>

        <div>
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h9-slider-image-2.jpg" />
        </div>
        <div>
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h9-slider-image-3.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselContainer;
