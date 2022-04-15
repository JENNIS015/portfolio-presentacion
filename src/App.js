import React from "react";
import "./styles/app.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
