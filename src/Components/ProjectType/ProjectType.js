import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const ProjectType = () => {
    let showDate = new Date();
    let todayDate =
      showDate.getDate() +
      "/" +
      (showDate.getMonth() + 1) +
      "/" +
      showDate.getFullYear();
    let timeNow =
      showDate.getHours() +
      ":" +
      showDate.getMinutes() +
      ":" +
      showDate.getSeconds();
  
    const { user } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
      projectType: undefined,
      createDate: todayDate + "," + timeNow,
    });
  
    const [error, setError] = useState("");
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post(
          `https://developerslog.herokuapp.com/api/projectType`,
          credentials
        );
        navigate("/dashboard");
  
        window.location.reload();
      } catch (err) {
        setError(err.response.data);
      }
    };

  return (
    <div className="tab-content mt-3">
    <div className="tab-pane active show" id="Company_Settings">
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="card-title">Project Type</h5>
        </div>
        <div className="card-body">
          <form className="row g-4">

            <div className="col-md-6 col-sm-12">
              <div className="form-group">
              <label className="form-label">
              Project Type <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  name="projectType"
                  id="projectType"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Project Type"
                />
              </div>
            </div>
        
         
       

            <div className="col-12 mt-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectType