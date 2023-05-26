import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="py-20">
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-5xl font-bold">Job Category List</h1>
        <p className="py-5 text-xl text-slate-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex justify-between mx-5">
        {categories.map((category) => (
          <Jobs category={category} key={category.id}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default Category;
