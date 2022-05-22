import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./section1.css";
import { FaCrown } from "react-icons/fa";

const Section1 = () => {
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
            {/* <span>
              <a href="/">
                <FaCrown/>
              </a>
            </span> */}
            <a href="/">
              <img src="slide1.webp" alt="StaticImg1" />
              <div className="imgContainer">
                <p>100days</p>
              </div>
            </a>
          </div>
          <div className="img2Block">
            <a href="/">
              <img src="slide2.webp" alt="StaticImg2" />
            </a>
          </div>
          <div className="img3Block">
            <a href="/">
              <img src="slide3.webp" alt="StaticImg3" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section1;
