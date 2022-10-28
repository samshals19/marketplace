import React from "react";
import AsideMarketplace from "./Components/AsideMarketplace";

import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";

export default function UserProSettings() {
  return (
    <div>
      {/* content1 */}
      <AsideMarketplace />
      {/*  */}
      <div className="form-block">
        {/* <TopNavAllThree
        breadimg="/img/LaunchedIcon.png"
        title="Launchpad"
        subtitle="Pools"
        mainpara="Discover upcoming or live sales."
      /> */}

        <Topnavicon2 />

        <div className="clear"></div>
        {/* content1 slider */}

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <div className="fl-container mg_13">
          <h1>Account Settings</h1>
        </div>

        <div className="outer_box">
          <div className="block_section_1_airdrop_form">
            <div className="right-block">
              <div className="contain_block_1_form fl-left">
                <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
                  <p>Profile Image</p>
                </div>
              </div>
              <div class="imgarea_top_rightform_block_1 clear">
                <div className="img_name_section1 fl-left">
                  <img src="/img/EMpty Image Box (1).png" alt="" />
                </div>
                <div className="img_name_section2_newupdate fl-right">
                  JPG,PNG or GIF <br /> 300 x 300 Size Recommended <br /> MAX
                  10MB
                </div>
                <div className="img_name_section3_newupdate fl-right">
                  {" "}
                  <img src="/img/export.png" alt="" /> Upload File
                </div>
              </div>
              <div className="contain_block_1_form fl-left">
                <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
                  <p>Cover Image</p>
                </div>
              </div>
              <div class="imgarea_top_rightform_block_1 bg_dash clear">
                <div className="img_name_section1 ">
                  {/* <img src="/img/BG.png" alt="" /> */}
                </div>
                <div className="img_name_section2_newupdate">
                  JPG,PNG or GIF <br /> MAX 15MB
                </div>
                <div
                  className="img_name_section3_newupdate  fl-right"
                  id="filesupload"
                >
                  {" "}
                  <img src="/img/export.png" alt="" /> Upload File
                </div>
              </div>
              {/* content2 */}
              <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left prodet_mg_tp_3">
                <p>
                  Profile Name <span>*</span>{" "}
                </p>

                <div class="inputarea_top_rightform_block_1 clear">
                  <input
                    type="text"
                    placeholder="Enter a Name"
                    name="describe_about_your_project"
                  />
                </div>
              </div>
              {/* content3 */}
              <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
                <p>Bio</p>

                <div class="inputvaluearea_top_rightform_block_1 clear">
                  <textarea
                    name=""
                    placeholder="Write something abouth the yourself"
                    id=""
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <p>Link Your Socials</p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"

                  placeholder="Enter Website Url."
                  name="website"
                />
                <img src="/img/Tel_logo.png" alt="" />
              </div>
            </div>
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  placeholder="Enter twitter Username"
                  name="twitter"
                />
                <img src="/img/Twit_logo.png" alt="" />
                <p>Link</p>
              </div>
            </div>
            <div className="userprobuttopn">
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
