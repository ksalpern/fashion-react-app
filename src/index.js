// import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Suspense fallback={null}> */}

    {/* </Suspense> */}
    {/* <Banner /> */}
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Slider />} />
    </Routes>
  </BrowserRouter>
);
