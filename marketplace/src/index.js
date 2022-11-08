import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DiscFormatLists from "./DiscFormatLists";
import DiscFormatBox from "./DiscFormatBox";
import reportWebVitals from "./reportWebVitals";
import DiscNTFSection from "./DiscNTFSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProSettings from "./UserProSettings";
import DiscNFTNormal from "./DiscNFTNormal";
import DiscEachCollectionPages from "./DiscEachCollectionPages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/UserProSettings" element={<UserProSettings />} />
        <Route
          path="/DiscEachCollectionPages"
          element={<DiscEachCollectionPages />}
        />
        <Route path="/Discover" element={<DiscFormatBox />} />
        <Route path="/DiscoverList" element={<DiscFormatLists />} />
        <Route path="/Coll" element={<DiscNFTNormal />} />
        <Route path="/NftEachpage" element={<DiscNTFSection />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
