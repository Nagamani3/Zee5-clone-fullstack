// import React, { useRef, useContext, useState } from "react";
// import { useEffect } from "react";
// import { DropDownApi } from "./../../ContentApis/DropDownApi";
// import "./Griddropdown.css";

// const HamburgerDrop = () => {
//   let value = useContext(DropDownApi);
//   let dropDownRef = useRef();
//   let handleDrop = value.handleDrop;

//   useEffect(() => {
//     console.log(dropDownRef.current);
//     if (value.state === true) {
//       dropDownRef.current.classList.add("activeClass");
//     } else {
//       dropDownRef.current.classList.remove("activeClass");
//     }
//   }, [value.state]);
//   return (
//     <section id="dropDownSlide" ref={dropDownRef}>
//       <nav>
//         <div className="dropDivs">
//           <h4 href="">Home</h4>
//         </div>
//         <div className="dropDivs">
//           <h4 href="">Explore</h4>
//         </div>
//         <div className="dropDivs">
//           <h4 href="">Plans</h4>
//         </div>
//         <div className="dropDivs">
//           <h4 href="">Settings</h4>
//         </div>
//         <div className="dropDivs">
//           <h4 href="">Info</h4>
//         </div>
//         <div className="versionText">
//           <h4 href="">Version</h4>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default HamburgerDrop;

import React, { useEffect, useRef, useContext, useState } from "react";
import { DropDownApi } from "../../ContentApis/DropDownApi";
import Collapsible from "react-collapsible";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const HamburgerDrop = () => {
  let value = useContext(DropDownApi);
  let dropDownRef = useRef();
  let drop = value.drop;
  let handleDrop = value.handleDrop;

  useEffect(() => {
    if (value.state === true) {
      dropDownRef.current.classList.add("activeClass");
    } else {
      dropDownRef.current.classList.remove("activeClass");
    }
  }, [value.state]);
  return (
    <section id="dropDownSlide" ref={dropDownRef}>
      <nav>
        <div className="dropDivs">
          <a href="/">Home</a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <div>
              <Collapsible trigger="Explore">
                <a href="">Tv Shows</a>
                <a href="">Movies</a>
                <a href="">Web Series</a>
                <a href="">News</a>
                <a href="">Premium</a>
                <a href="">Live Tv</a>
                <a href="">Music</a>
                <a href="">ZEEPLEX</a>
                <a href="">Play</a>
                <a href="">Article</a>
                <a href="">Learning</a>
                <a href="">Kids</a>
                <a href="">Videos</a>
                <a href="">Stories</a>
                <a href="">Channels</a>
              </Collapsible>
            </div>
          </a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <Collapsible trigger="Plans">
              <a href="">Buy Plan</a>
              <a href="">Have a Prepaid code?</a>
            </Collapsible>
          </a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <Collapsible trigger="Settings">
              <a href="">Reset Settings to Default</a>
            </Collapsible>
          </a>
        </div>
        <div className="dropDivs">
          <a href="" onClick={handleDrop}>
            <span>{drop ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
            <Collapsible trigger="Info">
              <a href="">About Us</a>
              <a href="">Help Center</a>
              <a href="">Grievance Redressal</a>
              <a href="">Terms of Use</a>
              <a href="">Privacy Policy</a>
            </Collapsible>
          </a>
        </div>
        <div className="versionText">
          <a href="">Version</a>
        </div>
      </nav>
    </section>
  );
};

export default HamburgerDrop;
