import React from "react";
import Aside from "./Components/AsideMarketplace";

import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

import Tabs from "./Tabs";
import Discovernft from "./Components/Discovernft";
import ContentForDiscover from "./Components/Right_sec_components/ContentForDiscover";

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

        {/* <Slider />
        <Discovernft /> */}

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}

        <div className="outer_box">
          <Tabs />

          <ContentForDiscover />
        </div>
      </div>
    </div>
  );
}
