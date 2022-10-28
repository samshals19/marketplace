import React from "react";

export default function AddDetails4() {
  return (
    <div>
      {" "}
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
              <div className="img_name_section2_newupdate">
                JPG,PNG,GIF,MP3 OR MP4 <br />{" "}
                <span className="blackfile">MAX 100MB</span>
              </div>
              <div
                className="img_name_section3_newupdate  fl-right"
                id="filesupload"
              >
                {" "}
                <img src="/img/export.png" alt="" /> Upload File
              </div>
            </div>
            <div className="waveimg fl-left">
              <div className="wavecontent bg_dash_wave">
                <img src="/img/imgwave.png" alt="" />
              </div>
              <div className="wavecontent bg_dash_wave">
                <img src="/img/imgwave.png" alt="" />
              </div>
              <div className="wavecontent bg_dash_wave">
                <img src="/img/imgwave.png" alt="" />
              </div>
              <div className="wavecontent bg_dash_wave">
                <img src="/img/imgwave.png" alt="" />
              </div>
              <div className="wavecontent bg_dash_wave">
                <img src="/img/imgwave.png" alt="" />
              </div>
              <div className="wavecontent bg_dash_wave">
                <img src="/img/imgwave.png" alt="" />
              </div>
            </div>

            <div className="clear"></div>

            <div className="namemetaprop">
              <p>
                Your item name and metadata extracted from the .zip file shows
                here
              </p>
            </div>

            {/* content3 */}
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <p>Description</p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <textarea
                  name=""
                  placeholder="Write something abouth the NFT"
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
            </div>
            {/* content4 */}
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
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
            <div class="royalitycontentmain  form_mb_2 form_app6 fl-left">
              <p>
                Royalties <span>*</span>{" "}
              </p>

              <div class="royalitycontentinner clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"

                  placeholder="E.g. 10%"
                  name="website"
                />
                <img src="/img/perroy.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
