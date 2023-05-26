import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";

const Features = () => {

  const [jsonData, setJsonData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    fetch("featureJob.json")
      .then((res) => res.json())
      .then((data) => setJsonData(data));
  }, []);
  
const handleSeeMore = () => {
    setShowAll(true);
    setDisplayCount(jsonData.length);
  }
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-center py-5">Feature Jobs</h1>
      <p className="text-xl text-center text-slate-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid grid-cols-2 gap-5 px-5 py-10">
      
      {jsonData.slice(0, displayCount).map((feature) => (
          <SingleFeature feature={feature} key={feature?.id}></SingleFeature>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
      {!showAll && (
        <button className="btn-primary" onClick={handleSeeMore}>See More</button>
      )}
      </div>
    </div>
  );
};

export default Features;
