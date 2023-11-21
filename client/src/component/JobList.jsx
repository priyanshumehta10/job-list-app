import React from 'react'

const JobList = ({jobs,setSelectedJobs}) => {
  return (
    <div>
        <h2 className='mt-3 mb-4'>job Listing</h2>
        <ul className='list-group'>
            {
                jobs.map(job => (
                    <li className='list-group-item' key={job._id}>
                        <a href="#" onClick={()=>setSelectedJobs(job)} className='text-decoration-none'>
                        {job.title} - {job.company}
                        </a> 
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default JobList