import React from "react";

export default function AddDetails1() {
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
            <div className="chaintype">
              <div className="chosetypeimg fl-left">
                <img src="/img/chosetypeimg.png" alt="" />
              </div>
              <div className="chosetypecontent fl-left">
                <p>Binance Chain</p>
                <span>Est. gas fee ~ $40</span>
              </div>

              {/* <div className="fl-right downarrow">
                <p class="sh">This is a paragraph.</p>

                <button class="downdrop">
                  Toggle between hide() and show()
                </button>
              </div> */}
            </div>
            <div className="clear"></div>
            <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
              <p>
                Choose NFT Type <span>*</span>{" "}
              </p>
            </div>
            <div className="chosenfttype " id="chosenftpy">
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
                <div class="radio-item">
                  <input type="radio" id="ritema" name="ritem" value="ropt2" />
                  <label for="ritema" class="new"></label>
                </div>
              </div>
            </div>
            <div className="clear signmarbtm5"></div>
            <div className="chosenfttype " id="chosenftpy">
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
                <div class="radio-item">
                  <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                  <label for="ritemb" class="new"></label>
                </div>
              </div>
            </div>
            <div className="clear signmarbtm5"></div>
            <div className="chosenfttype " id="chosenftpy">
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
                <div class="radio-item">
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
