import React, { Fragment, useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import DropDownMenu2 from "./DropDownMenu2";
import DropDownMenu3 from "./DropDownMenu3";
import DropDownMenu4 from "./DropDownMenu4";
import DropDownMenu5 from "./DropDownMenu5";
import DropDownMenu6 from "./DropDownMenu6";
const LeftBlock = () => {
  let [state, setState] = useState(false);
  let [news, setNews] = useState(false);
  let [movie, setMovie] = useState(false);
  let [premium, setPremium] = useState(false);
  let [live, setLive] = useState(false);
  let [grid, setGrid] = useState(false);
  let handleover = () => {
    setState(!state);
  };
  let handleNews = () => {
    setNews(!news);
  };
  let handleMovie = () => {
    setMovie(!movie);
  };
  let handlePremium = () => {
    setPremium(!premium);
  };
  let handleLive = () => {
    setLive(!live);
  };
  let handleGrid = () => {
    setGrid(!grid);
  };
  return (
    <Fragment>
      <section>
        <article>
          <div className="__leftSide">
            <div className="___logoBlock">
              <a href="#">
                <img src="zee5_logo.svg" alt="logo" />
              </a>
            </div>
            <div className="___leftMenuBlock">
              <ul>
                <li className="list-item">
                  <a href="/">Home</a>
                </li>
                <li className="list-item">
                  <Link to="/Movies">File</Link>
                </li>

                <li className="list-item">
                  <a style={{ position: "relative" }} onMouseOver={handleover}>
                    TvShows
                  </a>
                  <main
                    className="dropDownSection"
                    style={
                      state === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <DropDownMenu />
                  </main>
                </li>
                <li className="list-item">
                  <a style={{ position: "relative" }} onMouseOver={handleMovie}>
                    Movies
                  </a>
                  <main
                    className="dropDownSection3"
                    style={
                      movie === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <DropDownMenu3 />
                  </main>
                </li>
                <li className="list-item">
                  <a href="/">Webseries</a>
                </li>
                <li className="list-item">
                  <a style={{ position: "relative" }} onMouseOver={handleNews}>
                    News
                  </a>
                  <main
                    className="dropDownSection2"
                    style={
                      news === true ? { display: "block" } : { display: "none" }
                    }
                  >
                    <DropDownMenu2 />
                  </main>
                </li>
                <li className="list-item">
                  <a
                    style={{ position: "relative" }}
                    onMouseOver={handlePremium}
                  >
                    Premium
                  </a>
                  <main
                    className="dropDownSection"
                    style={
                      premium === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <DropDownMenu4 />
                  </main>
                </li>
                <li className="list-item">
                  <a style={{ position: "relative" }} onMouseOver={handleLive}>
                    LiveTv
                  </a>
                  <main
                    className="dropDownSection5"
                    style={
                      live === true ? { display: "block" } : { display: "none" }
                    }
                  >
                    <DropDownMenu5 />
                  </main>
                </li>
                <li className="list-item">
                  <a href="/">Music</a>
                </li>
                <li className="list-item">
                  <a style={{ position: "relative" }} onMouseOver={handleGrid}>
                    <BsFillGrid3X3GapFill style={{ top: "4px" }} />
                  </a>
                  <main
                    className="gridSection"
                    style={
                      grid === true ? { display: "block" } : { display: "none" }
                    }
                  >
                    <DropDownMenu6 />
                  </main>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default LeftBlock;
