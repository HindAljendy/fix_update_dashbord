import './Explore.css';
import React from 'react'
import Topbar from '../../componnents/Topbar/Topbar'
import { Outlet } from 'react-router-dom'
import EXNavbar from '../../componnents/Explor-nav_Maya/Explor-nav'


const Explore = () => {
  return (
    <>
      <div className='HJ_container' >
        <Topbar title="Explore"/>
        <EXNavbar />
        <Outlet/>
        
      </div>
    </>
        
  )
}
export default Explore