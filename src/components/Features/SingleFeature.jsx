import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleFeature = ({ feature }) => {
  //   const { companyName, img, job_title, location, salary, btn, id } = feature;

  return (
    <div className="border p-10 mt-5  rounded-lg md:text-xl text-slate-500">
      <img src={feature?.img} alt="" />
      <h1 className="text-2xl font-semibold py-3 text-black">
        {feature?.job_title}
      </h1>
      <h1>{feature?.companyName}</h1>
      <div className="flex gap-10 py-3">
        <button className=" btn-outlined">{feature?.category}</button>
        <button className=" btn-outlined">{feature?.category_2}</button>
      </div>
      <div className="pb-3 flex gap-5 md:gap-10">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{feature?.location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faCircleDollarToSlot} />
          <p>{feature?.salary}</p>
        </div>
      </div>
      <div className="my-3">
        <Link to={`/details/${feature?.id}`} className="btn-primary">
          View Details
        </Link>
      </div>
      <button></button>
    </div>
  );
};

export default SingleFeature;
