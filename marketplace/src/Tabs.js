import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* <div className="con40perimg fl-left">
        <img src="/img/eachpagelgo.png" alt="" />
      </div> */}

      <div className="cont40per">
        <div className="logoheadering">
          <img src="/img/eachpagelgo.png" alt="" />
        </div>

        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Info
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Bids
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
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
              {/* properties */}
              <div className="protes">
                <div className="propname fl-left">
                  <p>Properties</p>
                </div>
                <div className="proinfosection clear">
                  <div className="">
                    <div className="fl-left proinfosection1">
                      <p className="propsubname">Block</p>
                      <p className="propname">Flash</p>
                      <p className="propamt"> 48.1% Rarity</p>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="fl-left proinfosection1">
                      <p className="propsubname">Generation</p>
                      <p className="propname">Genesis</p>
                      <p className="propamt">96.2% Rarity</p>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="fl-left proinfosection1">
                      <p className="propsubname">Series</p>
                      <p className="propname">Sereis One</p>
                      <p className="propamt"> 90.4% Rarity</p>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="fl-left proinfosection1">
                      <p className="propsubname">Tier</p>
                      <p className="propname">Stellar</p>
                      <p className="propamt"> 0.5% Rarity</p>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="fl-left proinfosection1">
                      <p className="propsubname">Tier</p>
                      <p className="propname">Stellar</p>
                      <p className="propamt"> 0.5% Rarity</p>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="fl-left proinfosection1">
                      <p className="propsubname">Tier</p>
                      <p className="propname">Stellar</p>
                      <p className="propamt"> 0.5% Rarity</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div className="clear"></div>
              <div className="propname fl-left">
                <p>Details</p>
              </div>
              <div className="clear"></div>
              <div class="section_set_1">
                <div class="inner_section_4_a fl-left">Contract Address</div>
                <div class="inner_section_4_b fl-right">0xc19....2dde</div>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
              <div class="section_set_1">
                <div class="inner_section_4_a fl-left">Token ID</div>
                <div class="inner_section_4_b fl-right">5597</div>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
              <div class="section_set_1">
                <div class="inner_section_4_a fl-left">Token Standard</div>
                <div class="inner_section_4_b fl-right">ERC-20</div>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
              <div class="section_set_1">
                <div class="inner_section_4_a fl-left">Chain Type</div>
                <div class="inner_section_4_b fl-right">
                  {" "}
                  <img src="/img/ethereum.png" alt="" /> Ethereum
                </div>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
              <div class="section_set_1">
                <div class="inner_section_4_a fl-left">Creator’s Royalties</div>
                <div class="inner_section_4_b fl-right">10%</div>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="bidscontent">
              <div className="bidscontentinner1 fl-left">
                <img src="/img/eachnftlogo.png" alt="" />
                <p>
                  Three Dee <span> for 2 Editions</span>{" "}
                </p>
                <span>
                  1 Hrs ago <img src="/img/arrightlogo.png" alt="" />
                </span>
              </div>
              <div className="bidscontentinner2 fl-right">
                <p>77 ETH</p>
                <span>$120,478</span>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
            <div className="bidscontent">
              <div className="bidscontentinner1 fl-left">
                <img src="/img/eachnftlogo.png" alt="" />
                <p>
                  Three Dee <span> for 10 Editions</span>{" "}
                </p>
                <span>
                  2 Hrs ago <img src="/img/arrightlogo.png" alt="" />
                </span>
              </div>
              <div className="bidscontentinner2 fl-right">
                <p>77 ETH</p>
                <span>$120,478</span>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
            <div className="bidscontent">
              <div className="bidscontentinner1 fl-left">
                <img src="/img/eachnftlogo.png" alt="" />
                <p>
                  Three Dee <span> for </span>{" "}
                </p>
                <span>
                  2 Hrs ago <img src="/img/arrightlogo.png" alt="" />
                </span>
              </div>
              <div className="bidscontentinner2 fl-right">
                <p>77 ETH</p>
                <span>$120,478</span>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="bidscontent">
              <div className="bidscontentinner1 fl-left">
                <img src="/img/eachnftlogo.png" alt="" />
                <p>
                  Three Dee <span> Listed for</span>{" "}
                </p>
                <span>
                  2 Hrs ago <img src="/img/arrightlogo.png" alt="" />
                </span>
              </div>
              <div className="bidscontentinner2 fl-right">
                <p>77 ETH</p>
                <span>$120,478</span>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
            <div className="bidscontent">
              <div className="bidscontentinner1 fl-left">
                <img src="/img/eachnftlogo.png" alt="" />
                <p>
                  Three Dee <span> Listed for</span>{" "}
                </p>
                <span>
                  2 Hrs ago <img src="/img/arrightlogo.png" alt="" />
                </span>
              </div>
              <div className="bidscontentinner2 fl-right">
                <p>77 ETH</p>
                <span>$120,478</span>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
            <div className="bidscontent">
              <div className="bidscontentinner1 fl-left">
                <img src="/img/eachnftlogo.png" alt="" />
                <p>
                  Three Dee <span> Listed for</span>{" "}
                </p>
                <span>
                  2 Hrs ago <img src="/img/arrightlogo.png" alt="" />
                </span>
              </div>
              <div className="bidscontentinner2 fl-right">
                <p>77 ETH</p>
                <span>$120,478</span>
              </div>
              <div class="clear hr_inner">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
