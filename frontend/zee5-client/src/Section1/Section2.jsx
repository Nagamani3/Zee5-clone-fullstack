import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./section1.css";

const Section2 = () => {
  return (
    <section id="section1Block">
      <article>
        <div className="topSection">
          <h2>Exclusive Movies on ZEE5</h2>
          <p>
            More
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div className="bottomSection">
          <div className="img1Block">
            <a href="/">
              <img src="slide4.webp" alt="StaticImg1" />
            </a>
          </div>
          <div className="img2Block">
            <a href="/">
              <img src="slide5.webp" alt="StaticImg2" />
            </a>
          </div>
          <div className="img3Block">
            <a href="/">
              <img src="slide6.webp" alt="StaticImg3" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section2;
