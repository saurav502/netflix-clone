import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContentDetails from "./components/ContentDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contentdetails" element = {<ContentDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
