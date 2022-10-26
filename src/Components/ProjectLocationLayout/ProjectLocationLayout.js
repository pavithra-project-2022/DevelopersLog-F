import React from 'react'
import Common from '../Common/Common'
import ProjectLocation from '../ProjectLocation/ProjectLocation'
import SettingModal from '../SettingModal/SettingModal'

const ProjectLocationLayout = () => {
  return (
    <div id="layout-p" className="theme-red">

<Common/>
<div className="main">

<div className="body-header border-0 rounded-0 px-xl-4 px-md-2">
<div className="container-fluid">
<ProjectLocation/>
</div>
</div>

</div>

<SettingModal />
</div>
  )
}

export default ProjectLocationLayout