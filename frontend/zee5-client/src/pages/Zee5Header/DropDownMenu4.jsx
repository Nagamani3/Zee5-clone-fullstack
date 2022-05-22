import React from "react";
import "./__navbar.style.css";

const DropDownMenu4 = () => {
  return (
    <aside>
      <div className="leftBlock">
        <ul>
          <li>
            <a href="/">IMDB Top Picks</a>
          </li>
          <li>
            <a href="/">
              Exclusive movies on
              <br /> Zee5
            </a>
          </li>
          <li>
            <a href="/">
              Best of Zee5 originals in <br />
              Kannada
            </a>
          </li>
          <li>
            <a href="/">
              Top Zee5 movies in <br /> 
              <br />
              Kannada
            </a>
          </li>
        </ul>
      </div>
      <div className="rightBlock">
        <figure>
          <a href="/">
            <img src="./prem1.webp" alt="prem1" />
          </a>
          <a href="/">
            <img src="./prem2.webp" alt="prem2" />
          </a>
          <a href="/">
            <img src="./prem3.webp" alt="prem3" />
          </a>
          <a href="/">
            <img src="./prem4.webp" alt="prem4" />
          </a>
          <a href="/">
            <img src="./prem5.webp" alt="prem5" />
          </a>
          <a href="/">
            <img src="./prem6.webp" alt="prem6" />
          </a>
          <a href="/">
            <img src="./prem7.webp" alt="prem7" />
          </a>
          <a href="/">
            <img src="./prem8.webp" alt="prem8" />
          </a>
          <a href="/">
            <img src="./prem9.webp" alt="prem9" />
          </a>
        </figure>
      </div>
    </aside>
  );
};

export default DropDownMenu4;
