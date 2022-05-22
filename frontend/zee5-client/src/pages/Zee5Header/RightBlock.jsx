import React, { useState, useContext, useEffect } from "react";
import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import HamburgerDrop from "./HamburgerDrop";
// import DropDownMenu from "./DropDownMenu";
import { DropDownApi } from "./../../ContentApis/DropDownApi";

const RightBlock = () => {
  let value = useContext(DropDownApi);
  console.log(value);
  /*  let [bar, setBar] = useState(false);
  let handleBar = () => {
    setBar(!bar);
  }; */
  let [state, setstate] = useState();
  useEffect(() => {
    let data = localStorage.getItem("Signin-Token");
    setstate(data);                                       
    console.log(data);
  }, []);
  let handleclick = e => {
    e.preventDefault();
    localStorage.removeItem("Signin-Token");
    window.location.assign("/");
  };
  // console.log(state);
  return (
    <Fragment>
      <aside className="__rightSide">
        <main>
          <div className="___menuSplitter">
            <span>
              <a href="">
                <BsSearch />
              </a>
            </span>
          </div>
          <div className="___menuSplitter">
            <span>
              <a href="">
                <FaLanguage />
              </a>
            </span>
          </div>
          <div className="___menuSplitter">
            <span>
              {state ? (
                <a href="/signin" onClick={handleclick}>
                  Logout
                </a>
              ) : (
                <a href="/signin">Login</a>
              )}
            </span>
          </div>
          <div className="___menuSplitter">
            <span>
              <a href="">
                <span>
                  <FaCrown style={{ margin: "0px 5px" }} />
                </span>
                <span>Buy plan</span>
              </a>
            </span>
          </div>
          <div className="___menuSplittert" onClick={value.makeToggleit}>
            <span>
              <a href="#">
                <GiHamburgerMenu />
              </a>
            </span>
            {/* <main
              className="bardropdown"
              style={bar === true ? { display: "block" } : { display: "none" }}
            >
              <HamburgerDrop />
            </main> */}
          </div>
        </main>
      </aside>
    </Fragment>
  );
};

export default RightBlock;
