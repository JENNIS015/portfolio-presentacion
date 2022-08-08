import React from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loadable from "react-loadable";
 
const App = () => {
 
 function Loading({ error }) {
   if (error) {
     return "Oh noo !";
   } else {
     return <h3>Loading...</h3>;
   }
 }
 const Home = Loadable({
   loader: () => import("./pages/Home"),
   loading: Loading,
 });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
};

export default App;
