import React from "react";

export default function Topnavicon_admin_mode() {
  return (
    <>
      <div className="top-right-nav">
        <button className="button_name">
          <img
            className="icon-001 notification_icon"
            src="/images/newmask group.png"
          />{" "}
          0xdd....ahs4
          <img className="icon-002" src="/images/newbullet.png" />{" "}
        </button>
        <a href="" className="notification_icon">
          <img src="/images/newnotification-bing.png" />
        </a>
        <div className="app8_button_admin_edit">
          <button>
            Admin Mode
            <label class="swih">
              <input type="checkbox" />
              <span class="slid round"></span>
            </label>
          </button>
        </div>

        {/* <a href="">
              <img src="assets/images/setting-2.png" />
            </a> */}
      </div>
    </>
  );
}
