import React, { useState } from "react";

export default function AddDetails1() {
  const [isOpen, setIsOpen] = useState(true);
  const [flag, setFlag] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  const toggle = () => {
    setFlag(!flag);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="" className="active_form">
            {" "}
            <span class="dot_grey"></span> Token Info
          </a>
          <a href="">
            <span class="dot_green"></span> Presale
          </a>
          <a href="">Project Details</a>
          <a href="">Preview</a>
        </div>
        <div className="block_section_1_airdrop_form">
          {/* <App_Choose_Cur /> */}
          <div className="clear"></div>
          <div className="contain_block_1_form fl-left">
            <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
              <p>
                Upload NFT file <span>*</span>{" "}
              </p>
            </div>
            <div className="clear"></div>
            <div className="chaintype clear">
              <div className="chosetypeimg fl-left">
                <img src="/img/chosetypeimg.png" alt="" />
              </div>
              <div className="chosetypecontent fl-left">
                <p>Binance Chain</p>
                <span>Est. gas fee ~ $40</span>
              </div>
              <div className="fl-right droicon">
                <button class="" onClick={toggle}>
                  <img src="/img/DRopdown@.png" alt="" />
                </button>
              </div>
              <div className="clear hr_inner">
                <hr />
              </div>

              <div className="fl-left downarrow">
                <div
                  className="hidtaghere"
                  style={{
                    width: isOpen ? "0px" : "500px",
                    display: isOpen ? "none" : "block",
                  }}
                >
                  <div className="clear"></div>
                  <div className="chaintype clear">
                    <div className="chosetypeimg fl-left">
                      <img src="/img/chosetypeimg.png" alt="" />
                    </div>
                    <div className="chosetypecontent fl-left">
                      <p>Binance Chain</p>
                      <span>Est. gas fee ~ $40</span>
                    </div>
                    <div className="fl-right">
                      <div class="radio-item" id="radio_ite">
                        <input
                          type="radio"
                          id="ritemb"
                          name="ritem"
                          value="ropt2"
                        />
                        <label for="ritemb" class="new"></label>
                      </div>
                    </div>
                    <div className="newhidetag"></div>
                  </div>
                  <div className="clear"></div>
                  <div className="chaintype clear">
                    <div className="chosetypeimg fl-left">
                      <img src="/img/ethereum.png" alt="" />
                    </div>
                    <div className="chosetypecontent fl-left">
                      <p>Ethereum Chain</p>
                      <span>Est. gas fee ~ $40</span>
                    </div>
                    <div className="fl-right">
                      <div class="radio-item" id="radio_ite">
                        <input
                          type="radio"
                          id="ritemb"
                          name="ritem"
                          value="ropt2"
                        />
                        <label for="ritemb" class="new"></label>
                      </div>
                    </div>
                    <div className="newhidetag"></div>
                  </div>
                  <div className="clear"></div>
                  <div className="chaintype clear">
                    <div className="chosetypeimg fl-left">
                      <img src="/img/solana.png" alt="" />
                    </div>
                    <div className="chosetypecontent fl-left">
                      <p>Solana Chain</p>
                      <span>Est. gas fee ~ $40</span>
                    </div>
                    <div className="fl-right">
                      <div class="radio-item" id="radio_ite">
                        <input
                          type="radio"
                          id="ritemb"
                          name="ritem"
                          value="ropt2"
                        />
                        <label for="ritemb" class="new"></label>
                      </div>
                    </div>
                    <div className="newhidetag"></div>
                  </div>
                  <div className="clear"></div>
                  <div className="chaintype clear">
                    <div className="chosetypeimg fl-left">
                      <img src="/img/polygon.png" alt="" />
                    </div>
                    <div className="chosetypecontent fl-left">
                      <p>Polygon Chain</p>
                      <span>Est. gas fee ~ $40</span>
                    </div>
                    <div className="fl-right">
                      <div class="radio-item" id="radio_ite">
                        <input
                          type="radio"
                          id="ritemb"
                          name="ritem"
                          value="ropt2"
                        />
                        <label for="ritemb" class="new"></label>
                      </div>
                    </div>
                    <div className="newhidetag"></div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>

            <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
              <p>
                Choose NFT Type <span>*</span>{" "}
              </p>
            </div>
            <div className="chosenfttype clear" id="chosenftpy">
              <div className="chosenfttypeimg1 fl-left">
                <img src="/img/Muti3.png" alt="" />
              </div>
              <div className="fl-left chosetypenftcontent">
                <p>Single Edition</p>
                <span>
                  Choose if you’re willing to create a one of one item.{" "}
                </span>
              </div>
              <div className="fl-right">
                <div class="radio-item" id="radio_item">
                  <input type="radio" id="ritema" name="ritem" value="ropt2" />
                  <label for="ritema" class="new"></label>
                </div>
              </div>
            </div>
            <div className="clear signmarbtm5"></div>
            <div className="chosenfttype clear" id="chosenftpy">
              <div className="chosenfttypeimg2 fl-left">
                <img src="/img/Muti1.png" alt="" />
              </div>
              <div className="fl-left chosetypenftcontent">
                <p>Multiple Edition</p>
                <span>
                  Create a limited copies of an item to be shared among many
                  users.
                </span>
              </div>
              <div className="fl-right">
                <div class="radio-item" id="radio_item">
                  <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                  <label for="ritemb" class="new"></label>
                </div>
              </div>
            </div>
            <div className="clear signmarbtm5"></div>
            <div className="chosenfttype clear" id="chosenftpy">
              <div className="chosenfttypeimg3 fl-left">
                <img src="/img/Muti2.png" alt="" />
              </div>
              <div className="fl-left chosetypenftcontent">
                <p>Multiples</p>
                <span>
                  Create one of one of an item by just uploading a zip file
                  containing the item and its metadata.
                </span>
              </div>
              <div className="fl-right">
                <div class="radio-item" id="radio_item">
                  <input type="radio" id="ritemc" name="ritem" value="ropt2" />
                  <label for="ritemc" class="new"></label>
                </div>
              </div>
            </div>
            <div className="clear signmarbtm5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
