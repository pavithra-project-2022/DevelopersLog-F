import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Common = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const load = () => {
    navigate("/dashboard");
    window.location.reload();
  };
  return (
    <>
    <div className="header fixed-top">
<div className="container-fluid">
<nav className="navbar navbar-light px-md-2">

<a href="index.html" className="brand-icon d-flex align-items-center me-2 me-lg-4">

<span className="fs-5 text-primary fw-bold d-none d-md-block">Developer's Log</span>
</a>

<div className="h-right justify-content-end d-flex align-items-center">
<a className="nav-link text-primary p-1 me-lg-3 me-2" href="#" title="Settings" data-bs-toggle="modal" data-bs-target="#SettingsModal"><i className="fa fa-gear"></i></a>
<div className="dropdown user-profile ms-2">
<a className="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown">
<img className="avatar rounded-circle p-1" src="dashboardAssets/assets/images/profile_av.png" alt=""/>
</a>
<div className="dropdown-menu rounded-lg shadow border-0 dropdown-menu-end">
<div className="card border-0 w240">
<div className="card-body border-bottom">
<div className="d-flex py-1">
<img className="avatar rounded-circle" src="dashboardAssets/assets/images/profile_av.png" alt=""/>
<div className="flex-fill ms-3">
<p className="mb-0 text-muted"><span className="fw-bold">{(user.details.userFname).toUpperCase()}</span></p>
<small className="text-muted">{user.details.email}</small><br/>
<small className="text-muted">{user.details.role}</small>
<div>
<a href="" className="card-link" onClick={() => dispatch(logout(navigate("/")))}>Sign out</a>
</div>
</div>
</div>
</div>
<div className="list-group m-2">
<a href="" className="list-group-item list-group-item-action border-0" onClick={() => navigate("/profileLayout")}><i className="w30 fa fa-user"></i>Profile &amp; account</a>
<a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-gear"></i>Settings</a>
<a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-tag"></i>Customization</a>
<a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-users"></i>Manage team</a>
<a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-calendar"></i>My Events</a>
<a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-credit-card"></i>My Statements</a>
</div>
</div>
</div>
</div>
<button className="btn btn-primary d-none menu-toggle ms-3" type="button"><i className="fa fa-bars"></i></button>
</div>
</nav>
</div>
</div>

<div className="sidebar px-3 py-1">
<div className="d-flex flex-column h-100">


<ul className="menu-list flex-grow-1">
<li><a className="m-link" href="" onClick={()=>navigate('/dashboard')}><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
<li><a className="m-link" href="" onClick={()=>navigate('/projectLayout')}><i className="fa fa-table"></i> <span>Project</span></a></li>
<li><a className="m-link" href="" onClick={()=>navigate('/projectTypeLayout')}><i className="fa fa-file"></i> <span>Project Type</span></a></li>
<li><a className="m-link" href="" onClick={()=>navigate('/projectLocationLayout')}><i className="fa fa-location-arrow"></i> <span>Project Location</span></a></li>
</ul>

<button type="button" className="btn btn-link text-primary sidebar-mini-btn">
<span><i className="fa fa-arrow-left"></i></span>
</button>
</div>
</div>

    </>
  )
}

export default Common