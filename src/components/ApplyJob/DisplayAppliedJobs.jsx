import React from "react";
import { Link } from "react-router-dom";

const DisplayAppliedJobs = ({getJob}) => {
  return (
    <div>
        <div className="my-10 px-20">
          <div className="border rounded-md p-8 md:flex justify-between items-center">
            <div className="md:flex gap-5 items-center">
              <img
                className="bg-slate-100 py-16 px-5 rounded-md"
                src={getJob?.img}
                alt=""
              />
              <div>
                <h1 className="text-2xl font-semibold">
                  {getJob?.job_title}
                </h1>
                <p className="py-3 text-xl">{getJob?.companyName}</p>
                <div className="flex gap-5">
                  <button className="btn-outlined">{getJob?.category}</button>
                  <button className="btn-outlined">{getJob?.category_2}</button>
                </div>
                <div className="md:flex gap-5 pt-2 text-xl mb-3">
                  <p>{getJob?.location}</p>
                  <p>{getJob?.salary}</p>
                </div>
              </div>
            </div>
            <Link to={`/details/${getJob?.id}`} className="btn-primary">
          View Details
        </Link>
          </div>
        </div>
    </div>
  );
};

export default DisplayAppliedJobs;
