import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const DashHome = () => {
  return (
    <div className='dashhome' style={{display:"flex"}}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      
    </div>
  )
}

export default DashHome
