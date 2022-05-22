import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./sliderBlock.css"
import { BsFillPlayFill } from "react-icons/bs"
import {FaCrown} from "react-icons/fa"

const Slider = () => {
  return (
    <div className="sliderBlock" style={{ marginTop: "20px" }}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval="2000"
        showStatus={false}
        infiniteLoop={true}
        showIndicators={true}
      >
        <div
          className="carouselDiv"
          style={{
            width: "90%",
            marginLeft: "80px",
            height: "95%",
            position: "relative",
          }}
        >
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z571846/cover/1170x658withlogof8eaf284875e4b44af6cbce3018a4ccb.jpg"
            alt="carouselImg1"
            style={{ width: "90%", height: "95%" }}
          />
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "90px",
            }}
            id="crown"
          >
            <a href="/">
              <FaCrown style={{ margin: "0px 5px" }} />
            </a>
          </span>
          <h1 style={{ position: "absolute", top: "250px", left: "91px" }}>
            Garuda gamana<br></br> Vrushabha vahana
          </h1>

          <div
            className="btn"
            style={{ position: "absolute", top: "350px", left: "95px" }}
          >
            <button>
              <span>
                <BsFillPlayFill />
              </span>
              <span>watch</span>
            </button>
            <button>
              <span>
                <FaCrown style={{ margin: "0px 5px" }} />
              </span>
              <span>buy plan</span>
            </button>
          </div>
        </div>
        <div
          className="carouselDiv"
          style={{ width: "90%", marginLeft: "80px", height: "95%" }}
        >
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z553807/cover/1170x658withlogoa9a3abd9655e4eb4a276fdb04aed583d.jpg"
            alt="carouselImg2"
            style={{ width: "90%", height: "95%" }}
          />
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "170px",
            }}
            id="crown"
          >
            <a href="/">
              <FaCrown style={{ margin: "0px 5px" }} />
            </a>
          </span>
          <h1 style={{ position: "absolute", top: "290px", left: "174px" }}>
            puksatte lifeu
          </h1>

          <div
            className="btn"
            style={{ position: "absolute", top: "350px", left: "170px" }}
          >
            <button>
              <span>
                <BsFillPlayFill />
              </span>
              <span>watch</span>
            </button>
            <button>
              <span>
                <FaCrown style={{ margin: "0px 5px" }} />
              </span>
              <span>buy plan</span>
            </button>
          </div>
        </div>
        <div
          className="carouselDiv"
          style={{ width: "90%", marginLeft: "80px", height: "95%" }}
        >
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z557408/cover/1170x658withlogo63bf156237764610881363626bf8b343.jpg"
            alt="carouselImg3"
            style={{ width: "90%", height: "95%" }}
          />
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "170px",
            }}
            id="crown"
          >
            <a href="/">
              <FaCrown style={{ margin: "0px 5px" }} />
            </a>
          </span>
          <h1 style={{ position: "absolute", top: "290px", left: "174px" }}>
            Kannadiga
          </h1>

          <div
            className="btn"
            style={{ position: "absolute", top: "350px", left: "170px" }}
          >
            <button>
              <span>
                <BsFillPlayFill />
              </span>
              <span>watch</span>
            </button>
            <button>
              <span>
                <FaCrown style={{ margin: "0px 5px" }} />
              </span>
              <span>buy plan</span>
            </button>
          </div>
        </div>
        <div
          className="carouselDiv"
          style={{ width: "90%", marginLeft: "80px", height: "95%" }}
        >
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z587327/cover/1170x658withlogoa34f4da839aa4e5f91f5f46dd212242a.jpg"
            alt="carouselImg4"
            style={{ width: "90%", height: "95%" }}
          />
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "170px",
            }}
            id="crown"
          >
            <a href="/">
              <FaCrown style={{ margin: "0px 5px" }} />
            </a>
          </span>
          <h1 style={{ position: "absolute", top: "290px", left: "170px" }}>
           100
          </h1>

          <div
            className="btn"
            style={{ position: "absolute", top: "350px", left: "170px" }}
          >
            <button>
              <span>
                <BsFillPlayFill />
              </span>
              <span>watch</span>
            </button>
            <button>
              <span>
                <FaCrown style={{ margin: "0px 5px" }} />
              </span>
              <span>buy plan</span>
            </button>
          </div>
        </div>
        <div
          className="carouselDiv"
          style={{ width: "90%", marginLeft: "80px", height: "95%" }}
        >
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-197297/cover/1170x658withlogoda718d3cd3614563a1a40b0cb1985ccc.jpg"
            alt="carouselImg5"
            style={{ width: "90%", height: "95%" }}
          />
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "170px",
            }}
            id="crown"
          >
            <a href="/">
              <FaCrown style={{ margin: "0px 5px" }} />
            </a>
          </span>
          <h1 style={{ position: "absolute", top: "300px", left: "170px" }}>
           Shivaji Surathkal
          </h1>

          <div
            className="btn"
            style={{ position: "absolute", top: "350px", left: "170px" }}
          >
            <button>
              <span>
                <BsFillPlayFill />
              </span>
              <span>watch</span>
            </button>
            <button>
              <span>
                <FaCrown style={{ margin: "0px 5px" }} />
              </span>
              <span>buy plan</span>
            </button>
          </div>
        </div>
        <div
          className="carouselDiv"
          style={{ width: "90%", marginLeft: "80px", height: "95%" }}
        >
          <img
            src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z571978/cover/1170x658withlogoe2853ee6b64f433d8131d31582b62829.jpg"
            alt="carouselImg6"
            style={{ width: "90%", height: "95%" }}
          />
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "170px",
            }}
            id="crown"
          >
            <a href="/">
              <FaCrown style={{ margin: "0px 5px" }} />
            </a>
          </span>
          <h1 style={{ position: "absolute", top: "290px", left: "180px" }}>
       Aranmanai-3
          </h1>

          <div
            className="btn"
            style={{ position: "absolute", top: "350px", left: "170px" }}
          >
            <button>
              <span>
                <BsFillPlayFill />
              </span>
              <span>watch</span>
            </button>
            <button>
              <span>
                <FaCrown style={{ margin: "0px 5px" }} />
              </span>
              <span>buy plan</span>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
