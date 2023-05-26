import jobDetails from "../../../public/featureJob.json";
import { useParams } from "react-router-dom";
import { addToDb } from "../../FakeDB/fakedb";
import { useState } from "react";

const JobDetails = () => {
  const { id } = useParams();

  const detail = jobDetails.find((detail) => detail.id === id);

  // console.log(detail);

  const [jobs, setJobs] = useState([]);

  const handleAddJob = (newJob) => {
    const newCart = [...jobs, newJob];
    setJobs(newCart);

    addToDb(newJob);
  };

  return (
    <div>
      <div className="bg-slate-100 py-28">
        <h1 className="title text-3xl md:text-5xl text-center font-bold py-3">
          Job Details
        </h1>
      </div>
      <div className="md:flex gap-20 md:p-20 p-5">
        <div className="md:w-3/5 text-lg mb-5">
          <p>
            <span className="font-bold">Job Description: </span>
            {detail?.description}
          </p>
          <p className="mt-5">
            <span className="font-bold">Job Responsibility: </span>
            {detail?.responsibility}
          </p>
          <p className="mt-5">
            <span className="font-bold">Educational Requirements: </span>
            {detail?.requirements}
          </p>
          <p className="mt-5">
            <span className="font-bold">Experiences: </span>
            {detail?.experience}
          </p>
        </div>
        <div>
          <div className="bg-violet-100 p-5 mb-5 text-xl rounded-md">
            <p className="font-semibold text-xl">Job Details</p>
            <hr className="h-px my-3 bg-gray-400 border-0 dark:bg-gray-300" />
            <p>
              <span className="font-semibold">Salary :</span>
              {detail?.salary}
            </p>
            <p>
              <span className="font-semibold">Job Title :</span>
              {detail?.job_title}
            </p>
            <p className="font-semibold text-xl mt-3">Contact Information</p>
            <hr className="h-px my-3 bg-gray-400 border-0 dark:bg-gray-300" />
            <p>
              <span className="font-semibold">Phone : </span>
              {detail?.phone}
            </p>
            <p>
              <span className="font-semibold">Email : </span>
              {detail?.email}
            </p>
            <p>
              <span className="font-semibold">Phone : </span>
              {detail?.location}
            </p>
          </div>
          <button
            className="btn-primary w-full"
            onClick={() => handleAddJob(id)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
