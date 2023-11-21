
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import JobForm from "./component/JobForm";
import { getData } from "./services/api";
import JobList from "./component/JobList";
import JobDetails from "./component/JobDetails";



function App() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState(null);

  useEffect(()=>{
    const getJobsData = async()=>{
      const response = await getData();
      setJobs(response)
    }
    getJobsData();
  },[showForm])


  const handleToggleForm=()=>{
    setSelectedJobs(null);
    setShowForm(prevState => !prevState)
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-4">Job Board</h1>
          <button className="btn btn-primary mb-3" onClick={handleToggleForm}> {showForm ? `Hide Job Form`:`Show Job form`}</button>
          <div>
            { showForm && <JobForm setShowForm={setShowForm}/>}
            {!showForm && <JobList jobs={jobs} setSelectedJobs={setSelectedJobs}/>}
          </div>
        </div>
        {
          selectedJobs && 
      <div className="col-md-8">
        <JobDetails job={selectedJobs}/>
      </div>

        }
      </div>
    </div>
  );
}

export default App;
