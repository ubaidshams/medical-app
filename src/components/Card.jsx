import React from "react";
import { Link } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

const Card = ({ src, title }) => {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={src} alt="" />
        <h1>{title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          obcaecati inventore ullam quaerat repellat necessitatibus nobis
          nostrum odio sapiente facere!
        </p>
      </div>
      <div className="cardFooter">
        <div className="btn">
          <Link to="">Learn More</Link>
        </div>
        <div className="socialIcons">
          <TiSocialFacebook />
          <TiSocialTwitter />
          <TiSocialLinkedin />
          <TiSocialPinterest />
        </div>
      </div>
    </div>
  );
};

export default Card;
