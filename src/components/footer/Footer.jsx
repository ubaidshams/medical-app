import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaPinterestP,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { ImLocation } from "react-icons/im";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <article className="article">
        <div className="div1">
          <Link to="/">
            <img src={logo} alt="div1top" />
            <h1>healthopedia</h1>
          </Link>

          <p style={{ marginBottom: "20px" }}>
            Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm
            hedi corper turet suscipit lobortis augue duis dolore te feugait
            nulla facilisi mazim placerat
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "82%",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "skyblue" }}>
              <ImLocation />
            </span>
            <p>Street, 11000 Helsinki, Finland</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "55%",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "skyblue" }}>
              <FaPhone />
            </span>
            <p>(+123)11 123 4567</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "87%",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "skyblue" }}>
              <FaEnvelope />
            </span>
            <p>mediclinic@qodeinteractive.com</p>
          </div>

          <div className="iconsdiv">
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaPinterestP />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>
        <div className="div2">
          <h3>Latest News</h3>
          <div
            style={{
              display: "flex",
              width: "65%",
              justifyContent: "space-between",
              marginBottom: "15px",
              alignItems: "start",
              marginTop: "25px",
            }}
          >
            <img
              src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-1-186x186.jpg"
              alt="footer"
            />

            <div>
              <h4>
                Amazing <br />
                Technology
              </h4>

              <h5>April 13, 2017</h5>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "65%",
              justifyContent: "space-between",
              marginBottom: "15px",
              alignItems: "start",
            }}
          >
            <img
              src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-2-186x186.jpg"
              alt="footer"
            />

            <div>
              <h4>
                Medical
                <br /> Research
              </h4>

              <h5>April 12, 2017</h5>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "78%",
              justifyContent: "space-between",
              marginBottom: "15px",
              alignItems: "start",
            }}
          >
            <img
              src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-3-186x186.jpg"
              alt="footer"
            />

            <div>
              <h4>
                Achieving Better <br />
                Health
              </h4>
              <h5>April 13, 2017</h5>
            </div>
          </div>
        </div>
        <div className="div3">
          <h3>Twitter Feed</h3>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              marginBottom: "15px",
              alignItems: "start",
              marginTop: "25px",
            }}
          >
            <span>
              <FaTwitter />
            </span>{" "}
            &nbsp;
            <p>
              The #WordPress error log contains all the information related to
              errors and other notices about your #website’s cod…
              https://t.co/r4NnfA3r5o <br />2 days ago
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              marginBottom: "15px",
              alignItems: "start",
            }}
          >
            <span>
              <FaTwitter />
            </span>
            &nbsp;
            <p>
              The #WordPress error log contains all the information related to
              errors and other notices about your #website’s cod…
              https://t.co/r4NnfA3r5o <br /> 2 days ago
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              marginBottom: "15px",
              alignItems: "start",
            }}
          >
            <span>
              <FaTwitter />
            </span>
            &nbsp;
            <p>
              The #WordPress error log contains all the information related to
              errors and other notices about your #website’s cod…
              https://t.co/r4NnfA3r5o <br />2 days ago
            </p>
          </div>
        </div>
        <div className="div4">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </form>
          <button className="btn">Submit</button>
        </div>
      </article>
    </section>
  );
};

export default Footer;
