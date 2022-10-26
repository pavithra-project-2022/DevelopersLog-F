import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const CompanyUpdate = () => {
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
    companyName:undefined,
    branch:undefined,
    position:undefined,
    officeMailId:undefined,
    website:undefined,
    companyContactNo:undefined
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
        `https://developerslog.herokuapp.com/api/companyInfo/${user.details._id}/${user.details.userId}`,
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
        `https://developerslog.herokuapp.com/api/companyInfo/${user.details.empId}`
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
              data-bs-target="#menu-CompanyPages"
              href="#"
            >
              <span class="arrow fa fa-angle-right ms-auto text-end" style={{paddingRight:"20px"}}></span>
              <span>Company Updates</span>{" "}
              
            </a>

            <ul class="sub-menu collapse" id="menu-CompanyPages">
              <div className="tab-content mt-3">
                <div className="tab-pane active show" id="Company_Settings">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Company Information</h5>
                    </div>
                    <div className="card-body">
                      <form className="row g-4">
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              Company Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="companyName"
                              name="companyName"
                              onChange={handleChange}
                              value={userData?.companyName}
                              disabled={userData.companyName ? true : false}
                              placeholder="Enter Company Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">Branch <span className="text-danger">*</span></label>
                            <input
                              className="form-control"
                              name="branch"
                              id="branch"
                              value={userData?.branch}
                              onChange={handleChange}
                              placeholder="Enter Branch"
                              disabled={userData.branch ? true : false}
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              Position <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="position"
                              name="position"
                              value={userData?.position}
                              onChange={handleChange}
                              placeholder="Enter Position"
                              disabled={userData.position ? true : false}
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="form-group">
                            <label className="form-label">Office Mail-ID</label>
                            <input
                              type="email"
                              className="form-control"
                              id="officeMailId"
                              onChange={handleChange}
                              value={userData?.officeMailId}
                              placeholder="Enter Office Email ID"
                              disabled={userData.officeMailId ? true : false}
                              name="officeMailId"
                            />
                          </div>
                        </div>
                       
                        <div className="col-md-4 col-sm-12">
                          <label className="form-label">
                            Company Website URL <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="website"
                              name="website"
                              onChange={handleChange}
                              value={userData?.website}
                              placeholder="Enter Website URL"
                              disabled={userData.website ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <label className="form-label">Company Contact Number</label>
                          <div className="input-group">
                            <input
                              type="text"
                              id="companyContactNo"
                              name="companyContactNo"
                              className="form-control"
                              onChange={handleChange}
                              value={userData?.companyContactNo}
                              placeholder="Enter Company ContactNo"
                              disabled={userData.companyContactNo ? true : false}
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

export default CompanyUpdate