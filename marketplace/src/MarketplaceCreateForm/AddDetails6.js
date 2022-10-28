import React from "react";

export default function AddDetails6() {
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
          </div>
          <div class="imgarea_top_rightform_block_1 bg_dash clear">
            <div className="img_name_section1 ">
              {/* <img src="/img/BG.png" alt="" /> */}
            </div>
            <div className="rectinnerimg">
              <img src="/img/Rectinner.png" alt="" />
            </div>
          </div>
          {/* content2 */}
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left prodet_mg_tp_3">
            <p>
              Name <span>*</span>{" "}
            </p>

            <div class="inputarea_top_rightform_block_1 clear">
              <input
                type="text"
                placeholder="Enter NFT Name"
                name="describe_about_your_project"
                value="Fire Watcher [Genesis]"
                class="newinputNFT"
              />
            </div>
          </div>
          {/* content3 */}
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>Description</p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <textarea
                name="description"
                class="newinputNFT"
                placeholder="Write something abouth the NFT"
                id=""
                cols="30"
                rows="3"
                value="The Original Defense Robot Prototype developed by the
              International Space Security Administration. "
              ></textarea>
            </div>
          </div>
          {/* content4 */}
          <div class="Airdropinfo_right_title_block_1 w_50per form_mb_2 form_app6 fl-left">
            <p>
              Choose Collection <span>*</span>{" "}
            </p>
          </div>
          <div className="choosecollectptag  fl-right">
            <p>
              {" "}
              <img src="/img/addcircle.png" alt="" /> Create New{" "}
            </p>
          </div>
          <div className="clear"></div>
          <div>
            <div class="radio-item">
              <input type="radio" id="ritema" name="ritem" value="ropt1" />
              <label for="ritema">
                <div className="choosecollect">
                  <img src="/img/Ellipse.png" alt="" />
                  <div className="choosecollect2 fl-right">
                    <p>
                      Okay Bears <img src="/img/VerifiedTag.png" alt="" />
                    </p>
                    <span>10,000 Items</span>
                  </div>
                </div>
              </label>
            </div>

            <div class="radio-item">
              <input type="radio" id="ritemb" name="ritem" value="ropt2" />
              <label for="ritemb" class="new">
                <div className="choosecollect">
                  <img src="/img/Ellipse2.png" alt="" />
                  <div className="choosecollect2 fl-right">
                    <p>
                      Cubex <img src="/img/VerifiedTag.png" alt="" />
                    </p>
                    <span>2,414Items</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* content5 */}
          <div class="royalitycontentmain   form_mb_2 form_app6 fl-left">
            <p id="royal_48per">
              Royalties <span>*</span>{" "}
            </p>
            <p id="royal_50per">
              Number Of Copies <span>*</span>{" "}
            </p>

            <div class="properties clear">
              <input
                type="text"
                className="fl-left"
                id="leftsideper"
                // placeholder="Describe about your project"

                placeholder="E.g. Size"
                name="website"
                value="10"
              />
              <img src="/img/perroy.png" alt="" />

              <input
                type="text"
                className="fl-right"
                // placeholder="Describe about your project"

                placeholder="E.g. Large"
                name="website"
                value="505"
              />
            </div>
          </div>
          {/* content6 */}
          <div class="royalitycontentmain  form_mb_2 form_app6 fl-left">
            <p>
              Properties <span>*</span>{" "}
            </p>

            <div class="properties clear">
              <input
                type="text"
                className="fl-left"
                class="newinputNFT"
                // placeholder="Describe about your project"

                placeholder="E.g. Size"
                name="website"
                value="Generation"
              />

              <input
                type="text"
                className="fl-right"
                class="newinputNFT"
                // placeholder="Describe about your project"

                placeholder="E.g. Large"
                name="website"
                value="Genesis"
              />

              <input
                type="text"
                className="fl-left"
                class="newinputNFT"
                // placeholder="Describe about your project"

                placeholder="E.g. Size"
                name="website"
                value="Series"
              />

              <input
                type="text"
                className="fl-right"
                class="newinputNFT"
                // placeholder="Describe about your project"

                placeholder="E.g. Large"
                name="website"
                value="SeriesOne"
              />
              <input
                type="text"
                className="fl-left"
                class="newinputNFT"
                // placeholder="Describe about your project"

                placeholder="E.g. Size"
                name="website"
                value="Tier"
              />

              <input
                type="text"
                className="fl-right"
                class="newinputNFT"
                // placeholder="Describe about your project"

                placeholder="E.g. Large"
                name="website"
                value="Classic"
              />

              <input
                type="text"
                className="fl-left"
                // placeholder="Describe about your project"

                placeholder="E.g. Size"
                name="website"
              />

              <input
                type="text"
                className="fl-right"
                // placeholder="Describe about your project"

                placeholder="E.g. Large"
                name="website"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
