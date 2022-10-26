import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const PersonalUpdate = () => {
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
      empId: user.details.userId,
      createDate: todayDate + "," + timeNow,
      address:undefined,
      dob:undefined,
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
          `https://developerslog.herokuapp.com/api/personalInfo/${user.details._id}/${user.details.userId}`,
          credentials
        );
        navigate("/profileLayout");
  
        window.location.reload();
      } catch (err) {
        setError(err.response.data);
      }
    };
  
    const [userData, setUserData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        let users = await axios.get(
          `https://developerslog.herokuapp.com/api/personalInfo/${user.details.empId}`
        );
        setUserData(users.data);
      }
      fetchData();
    }, []);
  return (
    <li class="collapsed card-title" >
            <a
              class="m-link text-primary"
              style={{fontSize:"20px"}}
              data-bs-toggle="collapse"
              data-bs-target="#menu-PersonalPages"
              href="#"
            >
              <span class="arrow fa fa-angle-right ms-auto text-end" style={{paddingRight:"20px"}}></span>
              <span>Personal Updates</span>{" "}
              
            </a>

            <ul class="sub-menu collapse" id="menu-PersonalPages">
              <div className="tab-content mt-3">
                <div className="tab-pane active show" id="Company_Settings">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Personal Information</h5>
                    </div>
                    <div className="card-body">
                      <form className="row g-4">

                      
                        <div className="col-md-6 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              Address <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="address"
                              name="address"
                              onChange={handleChange}
                              value={userData?.address}
                             placeholder="Enter Address"
                             disabled={userData.address ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          DOB <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="dob"
                              id="dob"
                              value={userData?.dob}
                              onChange={handleChange}
                              disabled={userData.dob ? true : false}
                              type="text"
                              placeholder="Enter Date of Birth"
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
            </ul>
          </li> 
  )
}

export default PersonalUpdate