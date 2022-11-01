import React from "react";

export default function DiscoverBox() {
  return (
    <div className="discoverbox">
      <div className="innerdiscoverbox">
        <div className="discoverboximg">
          <img src="/img/disc1.png" alt="" />
        </div>
        <div className="middlecontdiscov ">
          <div className="fl-left conm">
            <p>
              DeGods Nfts <img src="/img/vertagdis.png" alt="" />{" "}
            </p>
          </div>
          <div className="fl-right floorprice">
            <p>Floor price</p>
          </div>
          <div className="clear"></div>
          <div className="fl-left disitems">
            <img src="/img/discellipse.png" alt="" /> <p>9,999 items</p>
          </div>
          <div className="fl-right discamt">
            <img src="/img/distherlogo.png" alt="" />
            <p>44.014</p>
          </div>
        </div>
      </div>
    </div>
  );
}
