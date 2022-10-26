import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const EducationUpdate = () => {
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
    sslcSchoolName:undefined,
    sslcBoard:undefined,
    sslcGPA:undefined,
    hscSchoolName:undefined,
    hscBoard:undefined,
    hscGPA:undefined,
    diplomaCollegeName:undefined,
    diplomaDegree:undefined,
    diplomaGPA:undefined,
    ugCollegeName:undefined,
    ugDegree:undefined,
    ugBoard:undefined,
    ugGPA:undefined,
    pgCollegeName:undefined,
    pgDegree:undefined,
    pgBoard:undefined,
    pgGPA:undefined,
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
        `https://developerslog.herokuapp.com/api/educationInfo/${user.details._id}/${user.details.userId}`,
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
        `https://developerslog.herokuapp.com/api/educationInfo/${user.details.empId}`
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
              data-bs-target="#menu-EducationPages"
              href="#"
            >
              <span class="arrow fa fa-angle-right ms-auto text-end" style={{paddingRight:"20px"}}></span>
              <span>Educational Updates</span>{" "}
              
            </a>

            <ul class="sub-menu collapse" id="menu-EducationPages">
              <div className="tab-content mt-3">
                <div className="tab-pane active show" id="Company_Settings">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Educational Information</h5>
                    </div>
                    <div className="card-body">
                      <form className="row g-4">


                      <div className="card-header">
                      <h6 className="card-title">SSLC</h6>
                    </div>
                        <div className="col-md-4 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              School Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="sslcSchoolName"
                              name="sslcSchoolName"
                              onChange={handleChange}
                              value={userData?.sslcSchoolName}
                             placeholder="Enter School Name"
                             disabled={userData.sslcSchoolName ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Board <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="sslcBoard"
                              id="sslcBoard"
                              value={userData?.sslcBoard}
                              onChange={handleChange}
                              disabled={userData.sslcBoard ? true : false}
                              type="text"
                              placeholder="Enter Board"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          GPA <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="sslcGPA"
                              name="sslcGPA"
                              onChange={handleChange}
                              value={userData?.sslcGPA}
                              disabled={userData.sslcGPA ? true : false}
                              type="text"
                              placeholder="Enter GPA"
                            />
                          </div>
                        </div>


                        <div className="card-header">
                      <h6 className="card-title">Higher Secondary</h6>
                    </div>
                    <div className="col-md-4 col-sm-12">
                       
                       <div className="form-group">
                         <label className="form-label">
                           School Name <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control"
                           type="text"
                           id="hscSchoolName"
                           name="hscSchoolName"
                           onChange={handleChange}
                           value={userData?.hscSchoolName}
                          placeholder="Enter School Name"
                          disabled={userData.hscSchoolName ? true : false}
                         />
                       </div>
                     </div>
                     <div className="col-md-4 col-sm-12">
                       <div className="form-group">
                       <label className="form-label">
                       Board <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control"
                           name="hscBoard"
                           id="hscBoard"
                           value={userData?.hscBoard}
                           onChange={handleChange}
                           disabled={userData.hscBoard ? true : false}
                           type="text"
                           placeholder="Enter Board"
                         />
                       </div>
                     </div>
                     <div className="col-md-4 col-sm-12">
                       <div className="form-group">
                       <label className="form-label">
                       GPA <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control"
                           id="hscGPA"
                           name="hscGPA"
                           onChange={handleChange}
                           value={userData?.hscGPA}
                           disabled={userData.hscGPA ? true : false}
                           type="text"
                           placeholder="Enter GPA"
                         />
                       </div>
                     </div>
                     
                     <div className="card-header">
                      <h6 className="card-title">Diploma</h6>
                    </div>
                        <div className="col-md-4 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              College Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="diplomaCollegeName"
                              name="diplomaCollegeName"
                              onChange={handleChange}
                              value={userData?.diplomaCollegeName}
                             placeholder="Enter College Name"
                             disabled={userData.diplomaCollegeName ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Degree <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="diplomaDegree"
                              id="diplomaDegree"
                              value={userData?.diplomaDegree}
                              onChange={handleChange}
                              disabled={userData.diplomaDegree ? true : false}
                              type="text"
                              placeholder="Enter Degree"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          GPA <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="diplomaGPA"
                              name="diplomaGPA"
                              onChange={handleChange}
                              value={userData?.diplomaGPA}
                              disabled={userData.diplomaGPA ? true : false}
                              type="text"
                              placeholder="Enter GPA"
                            />
                          </div>
                        </div>


                        <div className="card-header">
                      <h6 className="card-title">UG</h6>
                    </div>
                        <div className="col-md-3 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              College Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="ugCollegeName"
                              name="ugCollegeName"
                              onChange={handleChange}
                              value={userData?.ugCollegeName}
                             placeholder="Enter College Name"
                             disabled={userData.ugCollegeName ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Degree <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="ugDegree"
                              id="ugDegree"
                              value={userData?.ugDegree}
                              onChange={handleChange}
                              disabled={userData.ugDegree ? true : false}
                              type="text"
                              placeholder="Enter Degree"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Board <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="ugBoard"
                              id="ugBoard"
                              value={userData?.ugBoard}
                              onChange={handleChange}
                              disabled={userData.ugBoard ? true : false}
                              type="text"
                              placeholder="Enter University Board"
                            />
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          GPA <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="ugGPA"
                              name="ugGPA"
                              onChange={handleChange}
                              value={userData?.ugGPA}
                              disabled={userData.ugGPA ? true : false}
                              type="text"
                              placeholder="Enter GPA"
                            />
                          </div>
                        </div>

                        <div className="card-header">
                      <h6 className="card-title">PG</h6>
                    </div>
                        <div className="col-md-3 col-sm-12">
                       
                          <div className="form-group">
                            <label className="form-label">
                              College Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="pgCollegeName"
                              name="pgCollegeName"
                              onChange={handleChange}
                              value={userData?.pgCollegeName}
                             placeholder="Enter College Name"
                             disabled={userData.pgCollegeName ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Degree <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="pgDegree"
                              id="pgDegree"
                              value={userData?.pgDegree}
                              onChange={handleChange}
                              disabled={userData.pgDegree ? true : false}
                              type="text"
                              placeholder="Enter Degree"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          Board <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="pgBoard"
                              id="pgBoard"
                              value={userData?.pgBoard}
                              onChange={handleChange}
                              disabled={userData.pgBoard ? true : false}
                              type="text"
                              placeholder="Enter University Board"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <div className="form-group">
                          <label className="form-label">
                          GPA <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="pgGPA"
                              name="pgGPA"
                              onChange={handleChange}
                              value={userData?.pgGPA}
                              disabled={userData.pgGPA ? true : false}
                              type="text"
                              placeholder="Enter GPA"
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

export default EducationUpdate