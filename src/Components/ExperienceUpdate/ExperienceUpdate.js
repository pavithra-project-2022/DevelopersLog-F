import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const ExperienceUpdate = () => {
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
      companyName1:undefined,
      period1:undefined,
      position1:undefined,
      jobDescription1:undefined,
      companyName2:undefined,
      period2:undefined,
      position2:undefined,
      jobDescription2:undefined,
      companyName3:undefined,
      period3:undefined,
      position3:undefined,
      jobDescription3:undefined,
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
          `https://developerslog.herokuapp.com/api/experienceInfo/${user.details._id}/${user.details.userId}`,
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
          `https://developerslog.herokuapp.com/api/experienceInfo/${user.details.empId}`
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
              data-bs-target="#menu-ExperiencePages"
              href="#"
            >
              <span class="arrow fa fa-angle-right ms-auto text-end" style={{paddingRight:"20px"}}></span>
              <span>Experience Updates</span>{" "}
              
            </a>

            <ul class="sub-menu collapse" id="menu-ExperiencePages">
              <div className="tab-content mt-3">
                <div className="tab-pane active show" id="Company_Settings">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Experience Information</h5>
                    </div>
                    <div className="card-body">
                      <form className="row g-4">

                        <div className="card-header">
                      <h6 className="card-title">Company 1</h6>
                    </div>
                        <div className="col-md-3 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              Company Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="companyName1"
                              name="companyName1"
                              onChange={handleChange}
                              value={userData?.companyName1}
                             placeholder="Enter Company Name"
                             disabled={userData.companyName1 ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Duration <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="period1"
                              id="period1"
                              value={userData?.period1}
                              onChange={handleChange}
                              disabled={userData.period1 ? true : false}
                              type="text"
                              placeholder="Enter Work Period"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Position <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="position1"
                              id="position1"
                              value={userData?.position1}
                              onChange={handleChange}
                              disabled={userData.position1 ? true : false}
                              type="text"
                              placeholder="Enter Position"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Job Description <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              id="jobDescription1"
                              name="jobDescription1"
                              onChange={handleChange}
                              value={userData?.jobDescription1}
                              disabled={userData.jobDescription1 ? true : false}
                              type="text"
                              placeholder="Describe Job Experience"
                            ></textarea>
                          </div>
                        </div>

                 

                        <div className="card-header">
                      <h6 className="card-title">Company 2</h6>
                    </div>
                        <div className="col-md-3 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              Company Name 
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="companyName2"
                              name="companyName2"
                              onChange={handleChange}
                              value={userData?.companyName2}
                             placeholder="Enter Company Name"
                             disabled={userData.companyName2 ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Duration 
                            </label>
                            <input
                              className="form-control"
                              name="period2"
                              id="period2"
                              value={userData?.period2}
                              onChange={handleChange}
                              disabled={userData.period2 ? true : false}
                              type="text"
                              placeholder="Enter Work Period"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Position 
                            </label>
                            <input
                              className="form-control"
                              name="position2"
                              id="position2"
                              value={userData?.position2}
                              onChange={handleChange}
                              disabled={userData.position2 ? true : false}
                              type="text"
                              placeholder="Enter Position"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Job Description 
                            </label>
                            <textarea
                              className="form-control"
                              id="jobDescription2"
                              name="jobDescription2"
                              onChange={handleChange}
                              value={userData?.jobDescription2}
                              disabled={userData.jobDescription2 ? true : false}
                              type="text"
                              placeholder="Describe Job Experience"
                            ></textarea>
                          </div>
                        </div>



                        <div className="card-header">
                      <h6 className="card-title">Company 3</h6>
                    </div>
                        <div className="col-md-3 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              Company Name 
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="companyName3"
                              name="companyName3"
                              onChange={handleChange}
                              value={userData?.companyName3}
                             placeholder="Enter Company Name"
                             disabled={userData.companyName3 ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Duration 
                            </label>
                            <input
                              className="form-control"
                              name="period3"
                              id="period3"
                              value={userData?.period3}
                              onChange={handleChange}
                              disabled={userData.period3 ? true : false}
                              type="text"
                              placeholder="Enter Work Period"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Position 
                            </label>
                            <input
                              className="form-control"
                              name="position3"
                              id="position3"
                              value={userData?.position3}
                              onChange={handleChange}
                              disabled={userData.position3 ? true : false}
                              type="text"
                              placeholder="Enter Position"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Job Description 
                            </label>
                            <textarea
                              className="form-control"
                              id="jobDescription3"
                              name="jobDescription3"
                              onChange={handleChange}
                              value={userData?.jobDescription3}
                              disabled={userData.jobDescription3 ? true : false}
                              type="text"
                              placeholder="Describe Job Experience"
                            ></textarea>
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

export default ExperienceUpdate