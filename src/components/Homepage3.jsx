import React from "react";
import Photo from "../assets/images/pexels-askar-abayev-6193638 1.png";

const Homepage3 = () => {
  return (
    <div className="container my-[80px] flex px-[70px] md:p-[30px] md:mt-[-20px] gap-12 bg-[#ffffff] flex-row md:flex-col-reverse md:items-center ">
      <div className="w-1/2 md:w-full my-auto">
        <h1 className="font-bold text-[48px] leading-[56px] tracking-[0.02em] md:text-4xl">
          Everything you need to accept online payments
        </h1>
        <p className="font-normal text-[18px] mt-10 leading-[28px] tracking-[0.02em]">
          Whether you're a face-to-face business expanding into the online
          world, an established digital business looking to switch payment
          providers or are setting up a new online company, we can help you
          accept payments quickly and securely.<br/> 
          <br/>Accept online payments on any
          device or channel, whatever your business model. You’ll be up and
          running quickly, can add payment methods easily, and increase your
          conversion rates.
        </p>
      </div>
      <div className="w-1/2 md:w-full block">
        <img src={Photo} alt="pic" className="w-[634px] "/>
      </div>
    </div>
  );
};

export default Homepage3;
