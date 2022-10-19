import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay0ne from "../components/Overlay0ne";
import Sponsor from "../components/Sponsor";

import NewHome from "../components/NewHome";

function AboutView({ isLabel, setIsLabel }) {
  return (
    <div className="w-full max-w-[1728px] m-auto scrollbar-hide relative">
      <div className="bg-[#F4FDF8] scrollbar-hide">
        <Navbar isLabel={isLabel} setIsLabel={setIsLabel} />
      </div>
      
      
      <Footer />
      {isLabel !== "" ? (
        <div
          onClick={() => setIsLabel("")}
          className="absolute top-[72px] left-0 bg-green-600/30 backdrop-blur-sm w-full h-[100%] z-[1000]"
        >
          <Overlay0ne />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AboutView;
