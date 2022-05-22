import React, { Fragment, useEffect, useContext, createRef } from "react";
import "./__navbar.style.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import DropDownMenu from "./DropDownMenu";
import HamburgerDrop from "./HamburgerDrop";
import { DropDownApi } from "../../ContentApis/DropDownApi";
const Navbar = () => {
  let value = useContext(DropDownApi);
  console.log(value);
  return (
    <Fragment>
      <section id="_zeeHeaderSection">
        <article className="_zeeHeaderBlock">
          <LeftBlock />
          <RightBlock />
          <aside>{value.state === true ? <HamburgerDrop /> : ""}</aside>
        </article>
      </section>
    </Fragment>
  );
};

export default Navbar;
