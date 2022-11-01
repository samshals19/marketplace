import React from "react";
import { Link } from "react-router-dom";

export default function MarketBothIcon() {
  return (
    <>
      <div className="outer_box_1 margin-right15 fl-left">
        <div className="inner_box2 fl-left">
          {" "}
          <Link to="/Lock">
            <img src="/img/Filter.png" alt="" />{" "}
          </Link>
        </div>
        <div className="inner_box1 fl-left">
          <Link to="/Lockertab">
            <img src="/img/menu.png" alt="" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
