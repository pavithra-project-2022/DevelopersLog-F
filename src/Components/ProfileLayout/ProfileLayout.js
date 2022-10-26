import React from 'react'
import Common from '../Common/Common'
import Profile from '../Profile/Profile'
import SettingModal from '../SettingModal/SettingModal'

const ProfileLayout = () => {
  return (
    <div id="layout-p" className="theme-red">

<Common/>
<div className="main">

<div className="body-header border-0 rounded-0 px-xl-4 px-md-2">
<div className="container-fluid">
<Profile/>
</div>
</div>

</div>

<SettingModal />
</div>
  )
}

export default ProfileLayout