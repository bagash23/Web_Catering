import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbars } from "./components";
import { Beranda, DetilMenu } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Beranda />} />

        <Route path="/detil/:id" element={<DetilMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
