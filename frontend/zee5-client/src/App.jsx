import React, { Fragment } from "react";
import SignUp from "./pages/AuthComponents/SignUp";
import DropDownApiProvider from "./ContentApis/DropDownApi";
// import DropDownMenu from "./pages/Zee5Header/DropDownMenu";
import Navbar from "./pages/Zee5Header/Navbar";
// import Slider from "./pages/zee5Section/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/AuthComponents/Login";

import Home from "./Section1/Home";
import Fileupload from "./pages/AuthComponents/Fileupload";

const App = () => {
  return (
    <Fragment>
      <DropDownApiProvider>
        <Navbar />
      </DropDownApiProvider>

      <Router>
        <Routes>
          {/* <Route path="/" element={<Slider />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/Movies" element={<Fileupload />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
