import React from 'react'
import Common from '../Common/Common'
import ProjectLocation from '../ProjectLocation/ProjectLocation'
import ProjectType from '../ProjectType/ProjectType'
import SettingModal from '../SettingModal/SettingModal'

const ProjectTypeLayout = () => {
  return (
    <div id="layout-p" className="theme-red">

<Common/>
<div className="main">

<div className="body-header border-0 rounded-0 px-xl-4 px-md-2">
<div className="container-fluid">
<ProjectType/>
</div>
</div>

</div>

<SettingModal />
</div>
  )
}

export default ProjectTypeLayout