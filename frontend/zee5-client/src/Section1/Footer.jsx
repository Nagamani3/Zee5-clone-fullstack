import React, { Fragment } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import "./footer.css"
const Footer = () => {
  return (
    <Fragment>
      <main id="footerContainer">
        <aside>
          <div className="topFooter">
            <div className="topBlock">
              <p>Download Apps</p>
              <div className="anchor">
                <a href="/">
                  <img src="play_store.png" alt="playstore" />
                </a>
                <a href="/">
                  <img src="app_store.png" alt="appstore" />
                </a>
              </div>
            </div>
            <div className="contactBlock">
              <p>Contact with us</p>
              <div className="socialIcons">
                <span>
                  <a href="/">
                    <FaFacebookSquare />
                  </a>
                </span>
                <span>
                  <a href="/">
                    <IoLogoInstagram />
                  </a>
                </span>
                <span>
                  <a href="">
                    <AiOutlineTwitter />
                  </a>
                </span>
                <span>
                  <a href="">
                    <BsYoutube />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="about">
            <p>About us</p>
            <p>|</p>
            <p>help center</p>
            <p>|</p>
            <p>privacy policy</p>
            <p>|</p>
            <p>Terms of use</p>
          </div>
        </aside>
        <div className="Block">
          <div className="block1">
            <ul>
              <p>popuplar TV shows</p>
              <li>
                <a href="/">kumkum bhagya</a>
              </li>
              <li>
                <a href="/">kundali bhagya</a>
              </li>
              <li>
                <a href="/">bhagya lakshmi</a>
              </li>
              <li>
                <a href="/">bhagya lakshmi</a>
              </li>
              <li>
                <a href="/">bhagya lakshmi</a>
              </li>
            </ul>
          </div>
          <div className="block1">
            <ul>
              <p>premium movies</p>
              <li>
                <a href="/">drushya2</a>
              </li>
              <li>
                <a href="/">100</a>
              </li>
              <li>
                <a href="/">puksatte lifeu</a>
              </li>
              <li>
                <a href="/">shyam singha roy</a>
              </li>
              <li>
                <a href="/">mahan</a>
              </li>
            </ul>
          </div>
          <div className="block1">
            <ul>
              <p>popuplar live TV Channels</p>
              <li>
                <a href="/">Zee kannada</a>
              </li>
              <li>
                <a href="/">Zee hindhi</a>
              </li>
              <li>
                <a href="/">Zee5</a>
              </li>
              <li>
                <a href="/">Zee News</a>
              </li>
              <li>
                <a href="/">ZeeTV Hd</a>
              </li>
            </ul>
          </div>
          <div className="block1">
            <ul>
              <p>popuplar web series</p>
              <li>
                <a href="/">Money heist</a>
              </li>
              <li>
                <a href="/">Surya</a>
              </li>
              <li>
                <a href="/">3 Roses</a>
              </li>
              <li>
                <a href="/">Naxalbari</a>
              </li>
              <li>
                <a href="/">sunflower</a>
              </li>
            </ul>
          </div>
          <div className="block1">
            <ul>
              <p>popuplar Bollyhood celebrities</p>
              <li>
                <a href="/">sunny leone</a>
              </li>
              <li>
                <a href="/">deepika padkone</a>
              </li>
              <li>
                <a href="/">salman khan</a>
              </li>
              <li>
                <a href="/">disha patani</a>
              </li>
              <li>
                <a href="/">kangana rawath</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text">
          <p>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Copyright © 2022 Zee Entertainment
          </p>
          <p> Enterprises Ltd. All rights reserved.</p>
          
        </div>
      </main>
    </Fragment>
  );
};

export default Footer;
