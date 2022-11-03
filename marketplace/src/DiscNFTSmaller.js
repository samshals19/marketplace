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
import Discovernft from "./Components/Discovernft";

export default function DiscNFTSmaller() {
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
