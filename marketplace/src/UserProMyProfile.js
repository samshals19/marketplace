import React from "react";
import AsideMarketplace from "./Components/AsideMarketplace";

import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

import { Link } from "react-router-dom";

import DiscEachpages from "./Components/Middle_contain_sec/DiscEachpages";
import MarketDiscBar from "./Components/MarketDiscBar";
import NftsSmaller from "./Components/Box_section/NftsSmaller";
import MyProfile from "./Components/Middle_contain_sec/MyProfile";
import MyProfilebar from "./Components/MyProfilebar";

export default function UserProMyProfile() {
  return (
    <div>
      {/* content1 */}
      <AsideMarketplace />
      {/*  */}
      <div className="form-block">
        <Topnavicon2 />
        <div className="clear"></div>
        {/* content1 slider */}

        {/* <Slider /> */}
        {/* <Discovernft /> */}

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
          {/* <div className="disbox1">
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
          </div> */}
        </div>

        <div className="outer_box">
          {/* <DiscEachpages /> */}

          <div className="clear"></div>

          <MyProfile />
          <div className="clear"></div>

          <div className="clear"></div>
          <NftsSmaller
            img="/img/Nftslogo1.png"
            contentp="ArbowMan #475"
            nameconten="Listed Price"
            coinimg="/img/coinlogo1.png"
            coinamt="473,597"
          />
          <NftsSmaller
            img="/img/Nftslogo2.png"
            contentp="Backbone #475"
            nameconten="Listed Price"
            coinimg="/img/solana.png"
            coinamt="17,479"
          />
          <NftsSmaller
            img="/img/Nftslogo3.png"
            contentp="Healing Cells #189"
            nameconten="Listed Price"
            coinimg="/img/ethereum.png"
            coinamt="1,079"
          />
          <NftsSmaller
            img="/img/Nftslogo4.png"
            contentp="Doodle #475"
            nameconten="Listed Price"
            coinimg="/img/coinlogo1.png"
            coinamt="14,507"
          />
          <NftsSmaller
            img="/img/Nftslogo1.png"
            contentp="ArbowMan #475"
            nameconten="Listed Price"
            coinimg="/img/coinlogo1.png"
            coinamt="473,597"
          />
          <NftsSmaller
            img="/img/Nftslogo2.png"
            contentp="Backbone #475"
            nameconten="Listed Price"
            coinimg="/img/solana.png"
            coinamt="17,479"
          />
          <NftsSmaller
            img="/img/Nftslogo4.png"
            contentp="Doodle #475"
            nameconten="Listed Price"
            coinimg="/img/coinlogo1.png"
            coinamt="14,507"
          />
          <NftsSmaller
            img="/img/Nftslogo3.png"
            contentp="Healing Cells #189"
            nameconten="Listed Price"
            coinimg="/img/ethereum.png"
            coinamt="1,079"
          />
        </div>
      </div>
    </div>
  );
}
