import { useEffect } from "react";
import { useState } from "react";
import Job from "./job";

const FeaturedJob = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);
  return (
    <div>
      <h1 className="text-6xl text-center">Featured Jobs: {job.length}</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 mx-auto">
        {job.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
