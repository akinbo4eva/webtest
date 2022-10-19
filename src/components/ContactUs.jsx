import React from "react";
import { Link } from "react-router-dom";

const ContactUs = ({ isLabel, setIsLabel }) => {
  return (
    
      <div className="w-screen h-screen flex flex-col justify-center items-center  space-y-5 ">
        <h1 className="text-6xl text-[green] font-bold ">404</h1>
        <h3 className="text-3xl">Page not found</h3>
        <p>The URL of the page was not found. please try again</p>
        <div className="flex space-x-2">
          <button className="p-2 bg-[green] text-[white] rounded-md">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    
  );
};

export default ContactUs;
