import React from "react";
import Image from "../assets/images/Rectangle.png";
import Barcode from "../assets/images/barcode.png";

const Homepage4 = () => {
  return (
    <div className="container  py-[120px] gap-6 bg-[#ECF3F9] flex flex-row  px-[70px] md:px-[30px] md:flex-col md:text-left ">
      <div className="w-1/2 md:w-full box-content">
        <img src={Image} alt="" className="w-[626px] " />
      </div>
      <div className="w-1/2 md:w-full my-auto flex flex-col gap-8">
        <h1 className="font-bold md:w-full text-[48px] md:text-[36px] md:leading-[44px] leading-[56px] tracking-[0.02em]">
          Global Acceptance and all popular payment methods
        </h1>
        <p className="  font-normal text-[18px] leading-[28px] tracking-[0.02em]">
          Explore our payment methods that your customers are familiar with and
          trust:
        </p>
        <div className="md:p-[30px] w-full md:flex md:flex-col grid grid-rows-3 grid-flow-col gap-6 tracking-[0.02em] text-[18px] leading-[56px]">
          <div className="flex gap-2">
            <img src={Barcode} alt="" className="min-w-[15px] h-[20px]  " />
            <span>
              <span className="font-bold text-[18px] ">
                Expand into new markets</span><br/>{" "}
                We offer payment methods customers expect.
            </span>
              
          </div>
          <div className="flex gap-2">
            <img src={Barcode} alt="" className="min-w-[15px] h-[20px]  " />
            <span>
              <span className="font-bold text-[18px] ">
                Expand into new markets</span><br/>{" "}
                We offer payment methods customers expect.
            </span>
              
          </div>
          <div className="flex gap-2">
            <img src={Barcode} alt="" className="min-w-[15px] h-[20px]  " />
            <span>
              <span className="font-bold text-[18px] ">
                Expand into new markets</span><br/>{" "}
                We offer payment methods customers expect.
            </span>
              
          </div>
          <div className="flex gap-2">
            <img src={Barcode} alt="" className="min-w-[15px] h-[20px]  " />
            <span>
              <span className="font-bold text-[18px] ">
                Expand into new markets</span><br/>{" "}
                We offer payment methods customers expect.
            </span>
              
          </div>
          <div className="flex gap-2">
            <img src={Barcode} alt="" className="min-w-[15px] h-[20px]  " />
            <span>
              <span className="font-bold text-[18px] ">
                Expand into new markets</span><br/>{" "}
                We offer payment methods customers expect.
            </span>
              
          </div>
          <div className="flex gap-2">
            <img src={Barcode} alt="" className="min-w-[15px] h-[20px]  " />
            <span>
              <span className="font-bold text-[18px] ">
                Expand into new markets</span><br/>{" "}
                We offer payment methods customers expect.
            </span>
              
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Homepage4;
