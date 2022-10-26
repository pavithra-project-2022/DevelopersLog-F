import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../UserContext';
import { useNavigate } from "react-router-dom";
import './modal.css'
import { format } from 'date-fns'


const Modal = ({ setOpen}) => {
const userContext = useContext(UserContext);
const [userData, setUserData] = useState([]);
useEffect(() => {
  async function fetchData() {
    let users = await axios.get(`https://developerslog.herokuapp.com/api/projectType`);
    setUserData(users.data);
  }
  fetchData();
   
}, []);

const [userData1, setUserData1] = useState([]);
useEffect(() => {
  async function fetchData() {
    let users = await axios.get(`https://developerslog.herokuapp.com/api/projectLocation`);
    setUserData1(users.data);
  }
  fetchData();
}, []);


const [credentials, setCredentials] = useState({});
const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.put(`https://developerslog.herokuapp.com/api/project/${userContext.rowData.projectId}`, credentials);
      navigate("/projectLayout")
      window.location.reload()
    } catch (err) {
     
    }
  };


  return (

    <div className="modal fade"  id="ModalData" tabIndex="-1">
    <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable" >
    <div className="modal-content" style={{border:"1px solid black",background:"white"}}>
    <div className="modal-header">
    <h5 className="modal-title" style={{color:"black"}}>Project Data</h5>
    </div>
    <div className="modal-body custom_scroll">
    <form className="row g-4 modalData">
    <div className="col-md-12 col-sm-12">
    <div className="form-group">
                    <label className="form-label">
                      Code
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="projectCode"
                      name="projectCode"
                      onChange={handleChange}
                      defaultValue={userContext.rowData.projectCode}
                    //   value={userContext.rowData.projectCode}
                      // placeholder={userContext.rowData.projectCode}
                    />
                  </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Name
                    </label>
                    <input
                      className="form-control"
                      name="projectName"
                      id="projectName"
                      onChange={handleChange}
                      type="text"
                    //   value={userContext.rowData.projectName}
                    defaultValue={userContext.rowData.projectName}
                      // placeholder={userContext.rowData.projectName}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label className="col-form-label">Type</label>
                  <select
                    className="form-select array-select form-control"
                    id="projectType"
                    name="projectType"
                    onChange={handleChange}
                    aria-label="example"
                    
                  >
                    <option selected >{userContext.rowData.projectType}</option>
                    {userData.map((e) => (
                      <option>{e.projectType}</option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <label className="col-form-label">Location</label>
                  <select
                    className="form-select array-select form-control"
                    id="projectDevLocation"
                    name="projectDevLocation"
                    onChange={handleChange}
                    aria-label="example"
                  >
                    <option selected>{userContext.rowData.projectDevLocation}</option>
                    {userData1.map((e) => (
                      <option>{e.projectLocation}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Team Size
                    </label>
                    <input
                      className="form-control"
                      name="projectTeamSize"
                      id="projectTeamSize"
                      onChange={handleChange}
                      type="text"
                    //   value={userContext.rowData.projectTeamSize}
                      placeholder={userContext.rowData.projectTeamSize}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Duration
                    </label>
                    <input
                      className="form-control"
                      id="projectDuration"
                      name="projectDuration"
                      onChange={handleChange}
                      type="text"
                      
                    //   value={userContext.rowData.projectDuration}
                      defaultValue={userContext.rowData.projectDuration}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Start Date
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="projectComDate"
                      name="projectComDate"
                      onChange={handleChange}
                    // value={userContext.rowData.projectComDate}
                    defaultValue= {format(new Date(userContext.rowData.projectComDate), 'yyyy-MM-dd')}
                   
                    />
                  </div>
                </div>


                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Closed Date
                    </label>
                    <input
                      className="form-control"
                      name="projectClosedDate"
                      id="projectClosedDate"
                      onChange={handleChange}
                      type="date"
                    //   value={userContext.rowData.projectClosedDate}
                    defaultValue= {format(new Date(userContext.rowData.projectClosedDate), 'yyyy-MM-dd')}
                    />
                  </div>
                </div>
</form>
    </div>
    <div className="modal-footer d-flex justify-content-start text-center">
    <button type="button" className="btn flex-fill btn-primary lift" onClick={handleClick}>Save Changes</button>
    <button type="button" className="btn flex-fill btn-white border lift" data-bs-dismiss="modal" onClick={()=>navigate('/projectLayout')}>Close</button>
    </div>
    </div>
    </div>
    </div>


//     <div className="modalLogin">
  
//     <div className="modalContainer">
//       <form className='modalForm'>
//         <h3 className='modalh3'>Project Data</h3>

//       <b>Project ID :</b>  <input className='modalInput'
//           type="text"
//           id='projectId'
//           name='projectId'
//         //   value={}
//         //   onChange={}
//         />
//        <b>Project Code :</b> <input className='modalInput'
//           type="text"
//           id='projectCode'
//           name='projectCode'
//         //   value={}
//         //   onChange={}
//         />
//        <b>Project Name :</b>  <input className='modalInput'
//           type="text"
//           id='projectName'
//           name='projectName'
//         //   value={}
//         //   onChange={}
//         />
//         <b>Project Type :</b> <input className='modalInput'
//           type="text"
//           id='projectType'
//           name='projectType'
//         //   value={}
//         //   onChange={}
//         />
//         <b>Project Location :</b> <input className='modalInput'
//           type="text"
//           id='projectDevLocation'
//           name='projectDevLocation'
//         //   value={}
//         //   onChange={}
//         />
//         <b>Team Size :</b> <input className='modalInput'
//           type="text"
//           id='projectTeamSize'
//           name='projectTeamSize'
//         //   value={}
//         //   onChange={}
//         />
//        <b>Duration :</b>  <input className='modalInput'
//           type="text"
//           id='projectDuration'
//           name='projectDuration'
//         //   value={}
//         //   onChange={}
//         />
//        <b>Start Date :</b>  <input className='modalInput'
//           type="text"
//           id='projectComDate'
//           name='projectComDate'
//         //   value={}
//         //   onChange={}
//         />
//        <b>Closed Date :</b>  <input className='modalInput'
//           type="text"
//           id='projectClosedDate'
//           name='projectClosedDate'
//         //   value={}
//         //   onChange={}
//         />
       
//        <div className='row'>
//         <div className='col-6'>
//         <button className='cancel modalButton'>Cancel</button>
//         <button className='modalButton'>Save</button>
//         </div>
//         <div className='col-6'>
        
//         </div>
    
    
//        </div>
//       </form>
      
//     </div>
   
//   </div>
  )
}

export default Modal