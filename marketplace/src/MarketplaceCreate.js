import React from "react";
import AsideMarketplace from "./Components/AsideMarketplace";

import Topnavicon2 from "./Components/Topnavbar_section/Topnavicon2";
import Form from "./MarketplaceCreateForm/Form";

export default function MarketplaceCreate() {
  return (
    <div>
      {/* content1 */}
      <AsideMarketplace />
      {/*  */}
      <div className="form-block">
        <Topnavicon2 />

        <div className="clear"></div>
        {/* content1 slider */}

        {/* content1 slider */}
        <div className="clear"></div>

        {/* content */}
        <Form />
      </div>
    </div>
  );
}
