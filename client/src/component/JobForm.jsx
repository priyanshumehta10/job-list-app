import React from 'react'
import InputField from './InputField'
import { useState } from 'react'
import { saveData } from '../services/api'

const defaultData ={title:"",company:"",location:"",description:""}
const JobForm = ({setShowForm}) => {
  const [formData,setFormData] = useState(defaultData)
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit = (e) => {
  e.preventDefault();
  saveData(formData);
  setShowForm(false);
  setFormData(defaultData);
  }
  return (
    <div>
      <h2>Add a Job Listing</h2>
        <form onSubmit={handleSubmit}>
            <InputField
            type="text"
            label="Job Form"
            onChange={handleChange}
            value={formData.title}
            id="title"
            name="title"
            />
            <InputField
            type="text"
            label="Company"
            onChange={handleChange}
            value={formData.company}
            id="company"
            name="company"
            />
            <InputField
            type="text"
            label="Location"
            onChange={handleChange}
            value={formData.location}
            id="location"
            name="location"
            />
            <InputField
            type="text"
            label="Job Description"
            onChange={handleChange}
            value={formData.description}
            id="description"
            name="description"
            />
            <button type="submit" className="btn btn-primary mt-2">
                Submit
            </button>
        </form>
    </div>
  )
}

export default JobForm
