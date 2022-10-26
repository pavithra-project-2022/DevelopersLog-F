import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const DailyLog = () => {
    let showDate = new Date();
  let todayDate =showDate.getFullYear()+'-'+(showDate.getMonth()+1)+'-'+showDate.getDate();
  let timeNow = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds()



    const {user} = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        userId:user.details.userId,
        employeeName:user.details.userFname,
        inTime: undefined,
        outTime: undefined,
        dailyTask: undefined,
        createDate:todayDate,
        createTime:timeNow,
      });
    
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        
        try {
          const res = await axios.post(`https://developerslog.herokuapp.com/api/dcm/${user.details.userId}`, credentials);
          
          navigate("/dashboard")
          window.location.reload()
        } catch (err) {
          
        }
      };

  return (
    <div class="body d-flex py-lg-4 py-3">
    <div class="container">
    <div class="row g-3 justify-content-center">
    <div class="col-12">
    <div class="card">
    <div class="card-header py-3 bg-transparent border-bottom-0">
    <h6 class="card-title mb-0 text-center"><strong>Daily Work Information</strong></h6>
    </div>
    <div class="card-body">
    <form class="row g-3">
    <div class="col-lg-12 col-md-12 col-sm-12">
    <label class="col-form-label">In Time</label>
    <fieldset class="form-icon-group left-icon position-relative">
    <input type="time" id="inTime"
                    name="inTime"
                    min="09:00" max="18:00"
                    onChange={handleChange} required
                    placeholder="Enter In-Time" class="form-control"/>
    
    </fieldset>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12">
    <label class="col-form-label">Daily Task </label>
    <fieldset class="form-icon-group left-icon position-relative">
    <input type="text" id="dailyTask"
                    name="dailyTask"
                    required
                    placeholder="Enter Today Task Completion"
                    onChange={handleChange} class="form-control"/>
    
    </fieldset>
    </div>
    <div class="col-lg-12 col-md-12 col-sm-12">
    <label class="col-form-label">Out-Time</label>
    <fieldset class="form-icon-group left-icon position-relative">
    <input type="time" id="outTime"
                    name="outTime"  min="09:00" max="18:00"
                    onChange={handleChange}
                    required
                    placeholder="Enter Out-Time" class="form-control"/>
    
    </fieldset>
    </div>
  
    <div class="col-12">
    <button class="btn btn-primary" onClick={handleClick}>Save</button>
    <button class="btn btn-outline-secondary">Cancle</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div> 
    </div>
    </div>
  )
}

export default DailyLog