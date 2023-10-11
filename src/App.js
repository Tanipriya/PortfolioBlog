import {  Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Portfolio/About";
import DashBoard from "./Portfolio/DashBoard";

function App() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
