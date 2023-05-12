import React from "react";
import { Link } from "react-router-dom";

function YouMightLikeItem({ title, description, icon, category, }) {
  return (
    <article className="flex hover:animate-background rounded-xl p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] mb-4 sm:mb-0 sm:mr-4 duration-300 ease-in-out transform hover:scale-105">
      <div className="rounded-[10px] max-w-[210px] bg-[#0D0C12] p-4 !pt-20 sm:p-6">
        <img
          src={icon}
          className="rounded-sm h-10 w-10 mb-5"
          alt="tool"/>
        <h3 className="mt-0.5 font-medium text-white text-[15px] ">{title}</h3>
        <h4 className="text-grey-100 text-opacity-20 text-[12px] noOfLines-2">
          {description}
        </h4>
        <div className="mt-4 flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-2 bg-black text-white  px-3 py-0.5 text-xs text-black fw-700">
            <Link to="/newtooldetails/:">Visit</Link>
          </span>
        </div>
      </div>
    </article>
  );
}

export default YouMightLikeItem;