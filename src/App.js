// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Display from "./Display";
import SearchBar from "./SearchBar";
// import Slider from "./temp/Replace";

// import { useState } from "react";

function App() {
  const [city, setCity] = useState("Mumbai");

  const update = (c) => {
    // console.log(c, "update from app");
    setCity(c);
  };

  return (
    <>
      <div className="content">
        <div className="head">
          <SearchBar update={(updateCity) => update(updateCity)} />
        </div>

        <header className="header">Weather Details</header>

        <div className="main">
          <Display city={city} />
        </div>
      </div>
    </>
  );
}

export default App;

