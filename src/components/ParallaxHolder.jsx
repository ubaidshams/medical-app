import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import parallax from "../assets/images/parallax.jpg";
import Card from "./Card";

const ParallaxHolder = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            "https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          speed: -20,
        },
      ]}
      style={{ aspectRatio: "2 / 1", height: "80vh" }}
    >
      <section className="parallaxContent">
        <article>
          <Card
            src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-1.jpg"
            title="medical research"
          />
          <Card
            src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-2.jpg"
            title="acheiving better health"
          />
          <Card
            src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-3.jpg"
            title="amazing technology"
          />
        </article>
      </section>
    </ParallaxBanner>
  );
};

export default ParallaxHolder;
