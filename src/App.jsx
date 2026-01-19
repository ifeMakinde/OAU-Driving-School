// import { useState } from "react";
import React from "react";
import Homepage from "./pages/Homepage";
import Top from "./Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

      <Top />
    </div>
  );
}

export default App;
