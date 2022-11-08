import React from "react";

export default function MyProfile() {
  return (
    <>
      <div className="discEachpagesmain">
        <div className="discEachpagesheader">
          <img src="/img/userproheader.png" alt="" />
        </div>
        <div className="clear"></div>
        <div className="disehpgpd">
          <div className="discEachpagesmiddleset fl-left">
            <img src="/img/sidelogomypro.png" alt="" />
          </div>

          <div className="discEachpagesmiddle fl-right">
            <div className="fl-left discehpgheadname">
              Three Dee
              <img src="/img/vertagdis.png" alt="" />
            </div>
            <div className="clear"></div>
            <div className="fl-left mypromrpd">
              <div className="discEachpagesmiddleset myprow20px fl-left">
                <>
                  {" "}
                  <img src="/img/coinlogo1.png" alt="" /> 0xc19....2dde
                  <img src="/img/Vector (6).png" alt="" srcset="" />
                  <img src="/img/dribbble.png" alt="" srcset="" />
                </>
              </div>

              <div class="contain_block_1 block-ri ">
                {/* <img src="/img/Vector (6).png" alt="" srcset="" />
                <img src="/img/dribbble.png" alt="" srcset="" /> */}
              </div>
            </div>
            <div className="clear"></div>

            <div className="myproinner">
              <div className="myproinnleft fl-right">
                <p>
                  A deflationary collection of degenerates, punks, and misfits.
                  Gods of the metaverse & masters of our own universe.
                </p>
              </div>
              <div className="fl-left myproinnright">
                <div className="userproedit">
                  <img src="/img/Editmypro.png" alt="" /> Edit Profile
                </div>
                <div className="userproexport">
                  <img src="/img/exportherenew.png" alt="" />
                </div>
                <div className="userpro3dots">
                  <img src="/img/boxmyproup.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
