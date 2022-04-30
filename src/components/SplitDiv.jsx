import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const SplitDiv = () => {
  return (
    <div className="splitDiv">
      <div className="bgCyan">
        <h1>A Devotion to Healing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum
          quibusdam doloremque saepe aut? Dolorem neque voluptatem aperiam unde
          earum, quis fugit nam laudantium, aspernatur nulla ipsam optio
          architecto iusto.
        </p>
        <button>
          <span>Read More</span>
          <AiOutlineRight />
        </button>
      </div>
      <div className="bgBlue">
        <h1>Inspiring Better Health</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum
          quibusdam doloremque saepe aut? Dolorem neque voluptatem aperiam unde
          earum, quis fugit nam laudantium, aspernatur nulla ipsam optio
          architecto iusto.
        </p>
        <button>
          <span>Read More</span>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default SplitDiv;
