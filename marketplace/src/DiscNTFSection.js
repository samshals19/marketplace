import React from "react";
import Aside from "./Components/AsideMarketplace";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Live_end_upcom from "./Components/LiveONEndUpcom";
import Sort_by from "./Components/Sort_by";
import { Link } from "react-router-dom";
import Box2 from "./Components/Box_section/Box2";
import DiscoverBox from "./Components/Box_section/DiscoverBox";
import MarketBothIcon from "./Components/MarketBothIcon";
import AllCate from "./Components/AllCate";
import FloorPrice from "./Components/FloorPrice";
import Allcoin from "./Components/Allcoin";
import DiscListFormat from "./Components/Box_section/DiscListFormat";
import DiscFormatBox from "./DiscFormatBox";
import NftsNormal from "./Components/Box_section/NftsNormal";
import NftsSmaller from "./Components/Box_section/NftsSmaller";
import Tabs from "./Tabs";
import Discovernft from "./Components/Discovernft";

export default function DiscNTFSection() {
  return (
    <div>
      {/* content1 */}
      <Aside />
      {/*  */}
      <div className="form-block">
        <Topnavicon2 />
        <div className="clear"></div>
        {/* content1 slider */}

        <Slider />
        <Discovernft />

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container"></div>
        <div className="discovermiddlecontent">
          <div className="disbox1">
            <MarketBothIcon />
          </div>
          <div className="disbox2">
            <Sort_by />
          </div>
          <div className="disbox3">
            <AllCate />
          </div>
          <div className="dishbox4">
            <FloorPrice />
          </div>
          <div className="dishbox5">
            <Allcoin />
          </div>
        </div>

        <div className="outer_box">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
