import React from "react";

import Aside from "./Components/AsideMarketplace";
import Slider from "./Components/Slider";
import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Live_end_upcom from "./Components/LiveONEndUpcom";
import Sort_by from "./Components/Sort_by";
import My_Pools from "./Components/My_Pools";
import Search_sec from "./Components/Search_sec";
import TopNavAllThree from "./Components/Topnavbar_section/TopNavAllThree";
import LaunchpadPoolsBox from "./Components/Box_section/LaunchpadPoolsBox";
import { Link } from "react-router-dom";
import Box2 from "./Components/Box_section/Box2";
import DiscoverBox from "./Components/Box_section/DiscoverBox";
import MarketBothIcon from "./Components/MarketBothIcon";
import AllCate from "./Components/AllCate";
import FloorPrice from "./Components/FloorPrice";
import Allcoin from "./Components/Allcoin";

export default function DiscFormatBox() {
  return (
    <div>
      {/* content1 */}
      <Aside />
      {/*  */}
      <div className="form-block">
        <Topnavicon2 />
        <div className="clear"></div>
        {/* content1 slider */}

        {/* <Slider /> */}

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
          {/* box1 */}
          {/* <Link to="/LaunchpadPool/pools/Live/launchpoolbox">
            <LaunchpadPoolsBox
              coinlogo="/img/RIP_logo (1).png"
              coinname="Swipe Coin"
              subtitle1="Payment"
              subtitle2="Web3"
              percent="25"
              capimg="/img/RIP.png"
              capamt="240,000"
              midtitle1="120,000 RBA"
              midtitle2="240,000 RBA"
              nodays="140 Days"
            />
          </Link> */}
          {/* <Box2 /> */}

          {/* box2 */}
          {/* <Link to="/LaunchpadPool/pools/Live/Launchpadpool2">
            <LaunchpadPoolsBox
              coinlogo="/img/RIP_logo(6).png"
              coinname="Venus"
              subtitle1="DEFI"
              subtitle2="DEX"
              percent="80"
              capimg="/img/RIP (1).png"
              capamt="14,000"
              midtitle1="10,000 BNB"
              midtitle2="14,000 BNB"
              nodays="110 Days"
            />
          </Link> */}
          <DiscoverBox />
          <DiscoverBox />
          <DiscoverBox />
          <DiscoverBox />
          <DiscoverBox />
          <DiscoverBox />
          <Box2 />
        </div>
      </div>
    </div>
  );
}
