import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const ProfileUpdate = () => {
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
    empFname: undefined,
    empMname: undefined,
    empLname: undefined,
    email: undefined,
    mobile: undefined,
    pan: undefined,
    secondEmail:undefined,
    secondMobile:undefined,
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
        `https://developerslog.herokuapp.com/api/employee/${user.details._id}/${user.details.userId}`,
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
        `https://developerslog.herokuapp.com/api/employee/${user.details.empId}`
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
              data-bs-target="#menu-ExtraPages"
              href="#"
            >
              <span class="arrow fa fa-angle-right ms-auto text-end" style={{paddingRight:"20px"}}></span>
              <span>Profile Updates</span>{" "}
              
            </a>

            <ul class="sub-menu collapse" id="menu-ExtraPages">
              <div className="tab-content mt-3">
                <div className="tab-pane active show" id="Company_Settings">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h5 className="card-title">Basic Information</h5>
                    </div>
                    <div className="card-body">
                      <form className="row g-4">
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="empFname"
                              name="empFname"
                              onChange={handleChange}
                              value={user.details.userFname}
                              placeholder="Enter Employee First Name"
                              disabled={userData.empFname?true:false}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">Middle Name</label>
                            <input
                              className="form-control"
                              name="empMname"
                              id="empMname"
                              value={userData?.empMname}
                              onChange={handleChange}
                              disabled={userData.empMname ? true : false}
                              type="text"
                              placeholder='Enter Employee Middle Name'
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <div className="form-group">
                            <label className="form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              id="empLname"
                              name="empLname"
                              onChange={handleChange}
                              value={user.details.userLname}
                              disabled={userData.empLname?true:false}
                              type="text"
                              placeholder='Enter Employee Last Name'
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label className="form-label">Email ID <span className="text-danger">*</span></label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              onChange={handleChange}
                              value={user.details.email}
                              disabled={userData.email?true:false}
                              name="email"
                              placeholder='Enter Email ID'
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label className="form-label">Secondary Email ID</label>
                            <input
                              type="email"
                              className="form-control"
                              id="secondEmail"
                              onChange={handleChange}
                              value={userData?.secondEmail}
                              disabled={userData.secondEmail?true:false}
                              name="secondEmail"
                              placeholder='Enter Alternate Email ID'
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <label className="form-label">
                            Mobile Number <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="tel"
                              className="form-control"
                              id="mobile"
                              name="mobile"
                              onChange={handleChange}
                              value={user.details.mobile}
                              disabled={userData.mobile?true:false}
                              placeholder="Enter Mobile Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <label className="form-label">
                          Secondary Mobile Number
                          </label>
                          <div className="input-group">
                            <input
                              type="tel"
                              className="form-control"
                              id="secondMobile"
                              name="secondMobile"
                              onChange={handleChange}
                              value={userData?.secondMobile}
                              disabled={userData.secondMobile?true:false}
                              placeholder="Enter Alternate Mobile Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <label className="form-label">PAN Number</label>
                          <div className="input-group">
                            <input
                              type="text"
                              id="pan"
                              name="pan"
                              className="form-control"
                              onChange={handleChange}
                              value={userData?.pan}
                              placeholder="Enter PAN Number"
                              disabled={userData.pan ? true : false}
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

export default ProfileUpdate