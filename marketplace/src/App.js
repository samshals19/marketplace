import "./App.css";
// import UserProSettings from "./UserProSettings";
// import UserProSettings from "./UserProSettingsImg";
import UserProSettings from "./MarketplaceCreate";
import DiscFormatBox from "./DiscFormatBox";
import DiscFormatLists from "./DiscFormatLists";
import DiscNFTNormal from "./DiscNFTNormal";
import DiscNFTSmaller from "./DiscNFTSmaller";
import Tabs from "./Tabs";
import DiscNTFSection from "./DiscNTFSection";
import DiscEachCollectionPages from "./DiscEachCollectionPages";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<UserProSettings />} /> */}
          {/* <Route path="/" element={<DiscFormatBox />} /> */}
          {/* <Route path="/" element={<DiscFormatLists />} /> */}
          {/* <Route path="/" element={<DiscNFTNormal />} /> */}
          {/* <Route path="/" element={<DiscNFTSmaller />} /> */}
          {/* <Route path="/" element={<DiscNTFSection />} /> */}
          <Route path="/" element={<DiscEachCollectionPages />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
