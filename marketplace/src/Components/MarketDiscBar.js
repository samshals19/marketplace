import React, { useState } from "react";
import NftsSmaller from "./Box_section/NftsSmaller";

export default function MarketDiscBar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="marketdbarmenu">
        <div className="fl-left filtermarket">
          <img src="/img/filtersearch.png" alt="" />
        </div>
        <div className="fl-left dropdn">
          <img src="/img/arroweftdrp.png" alt="" />
        </div>
        <div className="marketitemchoice fl-left">
          {/* <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Items
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Activity
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="">
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
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div className="">
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
              </div>
            </div>
          </div> */}
          <span className="marketitems">Items</span>
          <span className="activityoff">Activity</span>
        </div>

        <div className="element4mrkt fl-right">
          <img src="/img/element3mark.png" alt="" />
        </div>
        <div className="element8mrkt fl-right">
          <img src="/img/element3mark2.png" alt="" />
        </div>

        <div className="resetsallmarket fl-right">
          <span>
            <img src="/img/undomkt.png" alt="" />
            Reset All
          </span>
        </div>
        <div className="pricelowtohigh fl-right">
          <span>Price : Low to High</span>{" "}
          <img src="/img/arroweftdrp.png" alt="" />
        </div>
      </div>
    </>
  );
}
