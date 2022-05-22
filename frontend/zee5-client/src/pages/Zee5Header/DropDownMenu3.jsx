import React from "react";
import "./__navbar.style.css";

const DropDownMenu3 = () => {
  return (
    <aside>
      <div className="leftBlock">
        <ul>
          <li>
            <a href="/">
              Exclusive Movies On
              <br /> Zee5
            </a>
          </li>
          <li>
            <a href="/">
              Top Zee5 movies in
              <br /> Kannada
            </a>
          </li>
          <li>
            <a href="/">
              Kannada movies you
              <br /> cannot miss
            </a>
          </li>
          <li>
            <a href="/">
              Popular Thriller Movies |
              <br />
              Kannada
            </a>
          </li>
        </ul>
      </div>
      <div className="rightBlock">
        <figure>
          <a href="/">
            <img src="./mov1.webp" alt="mov1" />
          </a>
          <a href="/">
            <img src="./mov2.webp" alt="mov2" />
          </a>
          <a href="/">
            <img src="./mov3.webp" alt="mov3" />
          </a>
        </figure>
      </div>
    </aside>
  );
};

export default DropDownMenu3;
