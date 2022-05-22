import React from "react";
import "./__navbar.style.css";

const DropDownMenu2 = () => {
  return (
    <aside>
      <div className="leftBlock">
        <ul>
          <li>
            <a href="/">
              Live News Channels-
              <br />
              Free
            </a>
          </li>
          <li>
            <a href="/">Headlines of the day</a>
          </li>
          <li>
            <a href="/">World of Showbiz</a>
          </li>
          <li>
            <a href="/">Around The Globe</a>
          </li>
        </ul>
      </div>
      <div className="rightBlock">
        <figure>
          <a href="/">
            <img src="./news1.webp" alt="news1" />
          </a>
          <a href="/">
            <img src="./news2.webp" alt="news2" />
          </a>
          <a href="/">
            <img src="./news3.webp" alt="news3" />
          </a>
          <a href="/">
            <img src="./news4.webp" alt="news4" />
          </a>
          <a href="/">
            <img src="./news5.webp" alt="news5" />
          </a>
          <a href="/">
            <img src="./news6.webp" alt="news6" />
          </a>
          <a href="/">
            <img src="./news7.webp" alt="news7" />
          </a>
          <a href="/">
            <img src="./news8.webp" alt="news8" />
          </a>
          <a href="/">
            <img src="./news9.webp" alt="news9" />
          </a>
        </figure>
      </div>
    </aside>
  );
};

export default DropDownMenu2;
