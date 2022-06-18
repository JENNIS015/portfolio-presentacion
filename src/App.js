import React from "react";
import "./styles/app.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/contacto/ContactForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" component={Home} /> */}
        
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
