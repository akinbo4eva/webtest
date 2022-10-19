import React from "react";
import Image1 from "../assets/images/sponsor1.svg";
import Image2 from "../assets/images/sponsor2.svg";

function Homepage2() {
  return (
    <div className="container flex flex-col px-[70px] md:px-[30px] py-[60px] space-y-12 ">
      <div className="flex flex-row gap-6 md:flex-col-reverse md:items-left ">
        <p className="w-1/2 md:w-full  text-[16px] font-normal leading-[24px] ">
          Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet
          tellus purus sit odio eget. Diam morbi faucibus vitae neque id in.
          Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
          Trusted by 200+ companies around the world
        </p>
        <h3 className="w-1/2 md:w-full text-[36px] font-bold leading-[44px]">
          Trusted by 200+ companies around the world
        </h3>
      </div>
      <div className="grid grid-rows-2 grid-flow-col bg-[#FFFFFF] gap-4 md:grid-flow-row md:justify-left md:space-y-6">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image1} alt="" />
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image1} alt="" />
      </div>
    </div>
  );
}

export default Homepage2;
