import React from "react";
import CarouselContainer from "../components/CarouselContainer";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import SplitDiv from "../components/SplitDiv";
import Services from "../components/Services";
import ParallaxHolder from "../components/ParallaxHolder";

const Home = () => {
  return (
    <div className="homeBlock">
      <CarouselContainer />
      <div className="smallDetails">
        <div>
          <img
            src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h9-custom-icon-1.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            natus dolore eaque, inventore officiis dicta quidem ab provident
            facere illo!
          </p>
        </div>
        <div>
          <img
            src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h9-custom-icon-2.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            natus dolore eaque, inventore officiis dicta quidem ab provident
            facere illo!
          </p>
        </div>
        <div className="noBorder">
          <img
            src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h9-custom-icon-3.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            natus dolore eaque, inventore officiis dicta quidem ab provident
            facere illo!
          </p>
        </div>
      </div>
      <section className="laboratory">
        <article>
          <h1>our new laboratory</h1>
          <h6>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, unde.
            Animi ipsum saepe omnis vel libero corporis, maiores a, veritatis
            quia sit numquam illo harum voluptas sint. In, tenetur inventore!
          </h6>
          <div className="labContainer">
            <div className="vidContainer">
              <button>
                <BsFillPlayFill />
              </button>
            </div>
            <div className="labDetails">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quae repellat voluptates, reiciendis dolores a, vitae animi
                blanditiis veniam accusantium quis non harum eveniet corporis!
                Consequuntur deleniti nulla sint iusto tempora eius quis
                nesciunt atque, ut, in non officiis aspernatur. Eum error nihil
                accusantium quisquam quas nesciunt officiis laborum asperiores?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
                aperiam expedita. Voluptatem ducimus quos soluta ipsa, neque
                excepturi autem debitis architecto perspiciatis blanditiis
                officia dignissimos facere esse obcaecati labore porro veritatis
                modi nam magni praesentium illum numquam ratione, sequi
                laudantium.
              </p>
              <button>
                <span>learn more</span>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </article>
      </section>
      <SplitDiv />
      <Services />
      <ParallaxHolder />
    </div>
  );
};

export default Home;
