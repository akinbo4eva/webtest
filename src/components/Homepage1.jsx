import React from "react";
import heroman from "../assets/images/pexels-kampus-production-8476590.png";

const Homepage1 = () => {
  return (
    
      <div className="w-full min-h-[720px] flex flex-row bg-[#00662c] space-y-12 space-x-12 py[60px] px-[70px] md:px-[30px] md:flex-col md:space-x-0 md:container md:items-center md:px-6">
        <div className=" flex flex-col w-1/2 space-y-14 mt-[60px] md:w-full">
          <h1 className="font-bold text-[64px] text-[white] f-weight  md:text-4xl">
            Accept and make Payments anywhere, anytime.
          </h1>
          <p className="text-[20px] sm:max-w-sm font-normal non-italic text-white md:text-sm">
            Accept and make payments anywhere, anytime. SaySwitch is on a
            mission to build a reliable, smart transaction processing and
            switching infrastructure that simplify digital payment for everyone
            anywhere.
          </p>
          <div className="text-[#ffffff] flex  md:justify-left flex-row gap-6 ">
            <button className="bg-[#ffffff] text-[#00662c]  py-[12px] px-[24px] min-w-[134px] h-[48px] rounded-[4px] ">
              Get started
            </button>
            <button className="outline-none border-[1px] py-[12px] px-[24px] min-w-[134px] h-[48px] rounded-[4px]">
              Log in
            </button>
          </div>
        </div>
        <div className="mt-[60px] max-w-1/2">
          <img src={heroman} alt="pic" className="opacity-[0.7]  md:w-full" />
        </div>
      </div>
    
  );
};

export default Homepage1;
