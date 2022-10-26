import React from "react";
import Common from "../Common/Common";
import SettingModal from "../SettingModal/SettingModal";

const Dashboard = () => {
  return (
   
  <>
<div id="layout-p" className="theme-red">

<Common/>
<div className="main">

<div className="body-header border-0 rounded-0 px-xl-4 px-md-2">
<div className="container-fluid">
<div className="row">
<div className="col-12">
<div className="d-flex justify-content-between align-items-center py-2">
<ol className="breadcrumb rounded-0 mb-0 ps-0 bg-transparent flex-grow-1">
<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
</ol>
<div className="d-flex flex-wrap align-items-center">

<button className="btn btn-dark d-none d-sm-inline-block ms-1" type="button">Create Daily Log</button>
</div>
</div>
</div>
</div> 
</div>
</div>

<div className="body px-xl-4 px-md-2">
<div className="container-fluid">
<div className="row clearfix">


</div> 
</div>
</div>

</div>

<SettingModal/>
</div>
</>
  
  );
};

export default Dashboard;
