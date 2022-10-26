import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const ProjectLocation = () => {
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
      projectLocation: undefined,
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
          `https://developerslog.herokuapp.com/api/projectLocation`,
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
          <h5 className="card-title">Project Location</h5>
        </div>
        <div className="card-body">
          <form className="row g-4">

            <div className="col-md-6 col-sm-12">
              <div className="form-group">
              <label className="form-label">
              Project Location <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  name="projectLocation"
                  id="projectLocation"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Project Location"
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

export default ProjectLocation