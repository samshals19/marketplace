import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    // <div className="personal-info-container">
    //   <input
    //     type="text"
    //     placeholder="First Name..."
    //     value={formData.firstName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, firstName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Last Name..."
    //     value={formData.lastName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, lastName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Username..."
    //     value={formData.username}
    //     onChange={(e) => {
    //       setFormData({ ...formData, username: e.target.value });
    //     }}
    //   />
    // </div>
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="">
            {" "}
            <span class="dot_grey"></span> Airdrop Info
          </a>
          <a href="" className="active_form">
            <span class="dot_green"></span> Project Details
          </a>
          <a href="">Preview</a>
        </div>
        <div className="block_section_1_airdrop_form">
          <div className="right-block">
            <div className="contain_block_1_form fl-left">
              <div class="Airdropinfo_right_title_block_1 form_app6 fl-left">
                <p>
                  Upload Logo <span>*</span>{" "}
                </p>
              </div>
            </div>
            <div class="imgarea_top_rightform_block_1 clear">
              <div className="img_name_section1 fl-left">
                <img src="/img/Logo box.png" alt="" />
              </div>
              <div className="img_name_section2 fl-left">Swipe Token</div>
              <div className="img_name_section3 fl-right">Choose Image</div>
            </div>
            {/* content2 */}
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <p>
                Description{" "}
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputarea_top_rightform_block_1 clear">
                <input
                  type="text"
                  placeholder="Describe about your project"
                  value={formData.Description}
                  name="describe_about_your_project"
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      Description: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* content3 */}
            <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
              <p>
                Tags{" "}
                <span>
                  {" "}
                  <img src="/img/Ques.png" alt="" />{" "}
                </span>{" "}
              </p>

              <div class="inputvaluearea_top_rightform_block_1 clear">
                <input
                  type="text"
                  // placeholder="Describe about your project"
                  placeholder="Payment,Web3."
                  name="tags"
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      Tags: event.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">
                Token address Details
              </div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              Website <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                placeholder="https://bscscan.com/"
                name="website"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    Website: event.target.value,
                  })
                }
              />
              <img src="/img/Tel_logo.png" alt="" />
            </div>
          </div>
          <div class="Airdropinfo_right_title_block_1 form_mb_2 form_app6 fl-left">
            <p>
              Twitter <span>*</span>
              <span>
                {" "}
                <img src="/img/Ques.png" alt="" />{" "}
              </span>{" "}
            </p>

            <div class="inputvaluearea_top_rightform_block_1 clear">
              <input
                type="text"
                // placeholder="Describe about your project"
                placeholder="https://bscscan.com/"
                name="twitter"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    Website: event.target.value,
                  })
                }
              />
              <img src="/img/Twit_logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
