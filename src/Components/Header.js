import React from "react";
import { LOGO_LINK } from "../utils/Constant";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img src={LOGO_LINK} alt="logo" className="w-44 z-20" />
    </div>
  );
};

export default Header;
