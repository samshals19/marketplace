import React from "react";

export default function NftsSmaller(props) {
  return (
    <div className="nftsmaller">
      <div className="innernftsnormal">
        <div className="nftsnormalimg">
          <img src={props.img} alt="" />
        </div>
        <div className="middlecontdiscov ">
          <div className="fl-left conm">
            <p>{props.contentp}</p>
          </div>

          <div className="clear"></div>
          <div className="fl-left smallconte">
            <p>{props.nameconten}</p>
          </div>
          <div className="fl-right nftscoin">
            <img src={props.coinimg} alt="" />
            <p>{props.coinamt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
