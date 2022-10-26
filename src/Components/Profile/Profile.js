import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import CompanyUpdate from "../CompanyUpdate/CompanyUpdate";
import EducationUpdate from "../EducationUpdate/EducationUpdate";
import ExperienceUpdate from "../ExperienceUpdate/ExperienceUpdate";
import PersonalUpdate from "../PersonalUpdate/PersonalUpdate";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="row g-3">
      <div className="col-12">
        <div className="card mb-1">
          <div className="card-body p-4">
            <div className="d-flex align-items-center flex-column flex-md-row">
              <img
                src="dashboardAssets/assets/images/profile_av.png"
                alt=""
                className="rounded-circle"
              />
              <div className="media-body ms-md-5 m-0 mt-4 mt-md-0 text-md-start text-center">
                <h5 className="fw-bold mb-1">
                  {user.details.userFname.toUpperCase()}
                </h5>
                <div className="text-muted mb-1">
                  <i className="fa fa-phone"></i> {user.details.mobile}
                </div>
                <div className="text-muted mb-3">
                  <i className="fa fa-envelope"></i> {user.details.email}
                </div>
                <ul className="d-md-flex d-none list-unstyled"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column h-100" >
        <ul class="menu-list flex-grow-1 pb-4" style={{textDecoration:"none",listStyleType:'none'}}>
          <ProfileUpdate/>
          <CompanyUpdate/>
         <EducationUpdate/>
         <ExperienceUpdate/>
         <PersonalUpdate/>
        </ul>
      </div>
      
    </div>
  );
};

export default Profile;
