import React from "react";

const Jobs = ({ category }) => {
  const { img, title, jobs } = category;
  return (
      <div className="bg-violet-50 rounded-md md:w-80 mt-4 p-10">

        <img className="bg-violet-100 p-2 rounded-md w-20" src={img} alt="" />
        <h2 className="text-2xl font-bold py-2">{title}</h2>
        <p className="text-lg">{jobs}</p>
      </div>
  );
};

export default Jobs;
