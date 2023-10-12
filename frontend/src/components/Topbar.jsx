import React, { useEffect, useState } from 'react'
import { getFromLocal} from './scripts'


function Topbar({stData}) {
  const defaultimg = "/src/assets/preview-profile.png"
  const st_img = `http://localhost:8000/students${stData.profile}`

  return (
    <><div className='topbar-container' id='topbar-container'>
      <span className='student-profile-txt'>STUDENT PROFILE</span>
      <div className='profile-name-container'>
        <span className='st-name'>{stData.name}</span>
        <span className='st-profile'> <img src={st_img ? st_img : defaultimg} alt="" /></span>
      </div>
    </div></>
  )
  }

export default Topbar