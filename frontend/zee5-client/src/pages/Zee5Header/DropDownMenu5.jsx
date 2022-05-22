import React from "react";
import "./__navbar.style.css";

const DropDownMenu5 = () => {
  return (
    <aside>
      <div className="leftBlock">
        <ul>
          <li>
            <a href="/">Live News</a>
          </li>
          <li>
            <a href="/">Entertainment</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
        </ul>
      </div>
      <div className="rightBlock">
        <figure>
          <a href="/">
            <img src="./live1.webp" alt="live1" />
          </a>
          <a href="/">
            <img src="./live2.webp" alt="live2" />
          </a>
          <a href="/">
            <img src="./live3.webp" alt="live3" />
          </a>
        </figure>
      </div>
    </aside>
  );
};

export default DropDownMenu5;
