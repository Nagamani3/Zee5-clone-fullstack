import React from "react";
import "./__navbar.style.css";

const DropDownMenu = () => {
  return (
    <aside>
      <div className="leftBlock">
        <ul>
          <li>
            <a href="/">Top Kannada Shows</a>
          </li>
          <li>
            <a href="/">
              Must Watch Kannada
              <br /> Shows
            </a>
          </li>
          <li>
            <a href="/">Latest on Zee5</a>
          </li>
          <li>
            <a href="/">
              Latest on Zee5|
              <br />
              Kannada
            </a>
          </li>
        </ul>
      </div>
      <div className="rightBlock">
        <figure>
          <a href="/">
            <img src="./img1.webp" alt="img1" />
          </a>
          <a href="/">
            <img src="./img2.webp" alt="img2" />
          </a>
          <a href="/">
            <img src="./img3.webp" alt="img3" />
          </a>
          <a href="/">
            <img src="./img4.webp" alt="img4" />
          </a>
          <a href="/">
            <img src="./img5.webp" alt="img5" />
          </a>
          <a href="/">
            <img src="./img6.webp" alt="img6" />
          </a>
          <a href="/">
            <img src="./img7.webp" alt="img7" />
          </a>
          <a href="/">
            <img src="./img8.webp" alt="img8" />
          </a>
          <a href="/">
            <img src="./img9.webp" alt="img9" />
          </a>
        </figure>
      </div>
    </aside>
  );
};

export default DropDownMenu;
