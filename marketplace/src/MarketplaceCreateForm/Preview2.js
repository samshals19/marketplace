import React from "react";

export default function Preview2() {
  return (
    <>
      <div className="contain_form">
        <div className="menu-left_all">
          <a href="">
            <span class="dot_grey"></span> Token Info
          </a>
          <a href="">
            {" "}
            <span class="dot_grey"></span> Presale
          </a>
          <a href="">
            <span class="dot_grey"></span> Project Details
          </a>
          <a href="" className="active_form">
            <span class="dot_green"></span> Preview
          </a>
        </div>
        <div className="block_section_1_airdrop_form">
          <div className="right-block">
            <div className="contain_block_1 fl-left">
              <div className="img_top_right_block_1 fl-left" id="previewlogo">
                <img src="/img/rectimg2.png" alt="" />
                {/* <img src="/img/RIP_logo (1).png" alt="" /> */}
              </div>
              <div class="L_app4_right_title_block_1 air_app4 fl-left">
                <p>Fire Watcher [Genesis]</p>
                <div class="img_top_right_button_block_1 clear">
                  <div class="img_bottom_right_title_block_1 top_back">
                    <span>
                      The Original Defense Robot Prototype developed by the
                      International Space Security Administration.{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">NFT Properties</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Generation</div>
              <div className="inner_section_4_b fl-right">Genesis</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Series</div>
              <div className="inner_section_4_b fl-right"> SeriesOne</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Tier</div>
              <div className="inner_section_4_b fl-right">Classic</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
          </div>

          {/* -------------Presale details------------ */}
          <div className="block_section_4_form clear">
            <div className="section_set_1">
              <div className="Locker_mid_inner_section_4_a">NFT Details</div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Number Of Copies</div>
              <div className="inner_section_4_b fl-right">505</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Collection</div>
              <div className="inner_section_4_b fl-right" id="vertagimg">
                Frontier
                <img src="/img/Verifiedtagnew.png" alt="" />
              </div>
            </div>

            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Chain Type</div>
              <div className="inner_section_4_b fl-right" id="logoimg">
                <img src="/img/coinlogo1.png" alt="" />
                Binance
              </div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>
            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Contract Address</div>
              <div className="inner_section_4_b fl-right">0xc19....2dde</div>
            </div>
            <div className="clear hr_inner">
              <hr />
            </div>

            <div className="section_set_1">
              <div className="inner_section_4_a fl-left">Royalties</div>
              <div className="inner_section_4_b fl-right">10%</div>
            </div>
            <div className="clear app10_hr_pad">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
