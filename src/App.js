import React from "react";
import "./styles/app.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "swiper/css/bundle";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const rootElement = document.getElementById("root");
  render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='contact' element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>,
    rootElement
  );
};

export default App;
