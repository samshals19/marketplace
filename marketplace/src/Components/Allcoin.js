import React from "react";
import { Link } from "react-router-dom";

export default function Allcoin() {
  return (
    <>
      <div className="allcoininner clear">
        <div className="fl-left inner_box1">
          <Link to="">All</Link>
        </div>
        <div className="fl-left inner_box2">
          <Link to="">Ethereum</Link>
        </div>
        <div className="fl-left inner_box2">
          <Link to="">Solana</Link>
        </div>
        <div className="fl-left inner_box2">
          <Link to=""> BSC</Link>
        </div>
        <div className="fl-left inner_box2">
          <Link to="">Polygon</Link>
        </div>
      </div>
    </>
  );
}
