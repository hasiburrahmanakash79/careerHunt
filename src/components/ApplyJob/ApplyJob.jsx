import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../FakeDB/fakedb";
import DisplayAppliedJobs from "./DisplayAppliedJobs";

const ApplyJob = () => {
  const storedJob = getShoppingCart();
  const [jobs, setJobs] = useState([]);

  const [getJobs, setGetJobs] = useState([]);
  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
    const jobCart = async () => {
      let res = await fetch("/featureJob.json");
      let data = await res.json();
      setJobs(data);
    };
    jobCart();
  }, []);

  useEffect(() => {
    const displayJobs = [];

    for (const add in storedJob) {
      const displayData = jobs.find((job) => job.id === add);
      displayJobs.push(displayData);
    }
    setGetJobs(displayJobs);
    setTypeData(displayJobs);
  }, [jobs]);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.type.value;

    const filterData = getJobs.filter((getJob) => getJob.btn == type);
    setTypeData(filterData);
  };

  return (
    <div>
      <div className="bg-slate-100 py-28 mb-14">
        <h1 className="title text-3xl md:text-5xl text-center font-bold py-3">
          ApplyJob
        </h1>
      </div>
      <form action="" onSubmit={handleForm} className="flex gap-5 justify-end items-end px-5">
        <select
          required
          name="type"
          className="select select-bordered select-xl w-32 border border-fuchsia-500 rounded px-4 py-1 "
        >
          <option>OnSite</option>
          <option>Remote</option>
        </select>
        <button className="btn-outline">Submit</button>
      </form>
      {typeData.map((getJob) => (
        <DisplayAppliedJobs getJob={getJob}></DisplayAppliedJobs>
      ))}
    </div>
  );
};

export default ApplyJob;
