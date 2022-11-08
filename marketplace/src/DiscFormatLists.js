import React from "react";

import Aside from "./Components/AsideMarketplace";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Live_end_upcom from "./Components/LiveONEndUpcom";
import Sort_by from "./Components/Sort_by";
import { Link } from "react-router-dom";

import DiscoverBox from "./Components/Box_section/DiscoverBox";
import MarketBothIcon from "./Components/MarketBothIcon";
import AllCate from "./Components/AllCate";
import FloorPrice from "./Components/FloorPrice";
import Allcoin from "./Components/Allcoin";
import DiscListFormat from "./Components/Box_section/DiscListFormat";
import Discovernft from "./Components/Discovernft";

export default function DiscFormatLists() {
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
        <div className="fl-container">
          {/* <div className="outer_box_1  fl-left" id="outer_box_1_moble">
          <Live_end_upcom />
        </div>
        <div className="outer_box_2 fl-left " id="outer_box_2_moble">
          <My_Pools />
        </div>
        <Sort_by />
        <div className="outer_box_4 fl-right">
          <Search_sec />
        </div> */}
        </div>
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
          <DiscListFormat />
          <DiscListFormat />
          <DiscListFormat />
          <DiscListFormat />
          <DiscListFormat />
          <DiscListFormat />
        </div>
      </div>
    </div>
  );
}
