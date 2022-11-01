import "./App.css";
// import UserProSettings from "./UserProSettings";
// import UserProSettings from "./UserProSettingsImg";
import UserProSettings from "./MarketplaceCreate";
import DiscFormatBox from "./DiscFormatBox";
import DiscFormatLists from "./DiscFormatLists";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<UserProSettings />} /> */}
          {/* <Route path="/" element={<DiscFormatBox />} /> */}
          <Route path="/" element={<DiscFormatLists />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
