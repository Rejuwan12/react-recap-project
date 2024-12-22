/* eslint-disable react/prop-types */



const Job = ({job}) => {
    const {logo,job_title,company_name,
        remote_or_onsite,location,
        job_type,salary,
    }= job;
    return (
        <div className="px-4 py-2 border card card-compact bg-base-100">
  <figure>
    <img
      src={logo}
      alt="Logo for jobs" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-4">
      <button className="btn btn-primary btn-outline">{remote_or_onsite}</button>
      <button className="btn btn-primary btn-outline">{job_type}</button>
    </div>
    <div className="flex items-center">
      <p>{location}</p>
      <p>Salary: {salary}</p>
    </div>
    <div className=" card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Job;