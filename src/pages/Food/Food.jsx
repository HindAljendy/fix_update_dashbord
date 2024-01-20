import './Food.css'
import TopbarSearchInput from '../../componnents/TopbarSearchInput/TopbarSearchInput'
import {  Outlet } from 'react-router-dom'
import RH_Food_Nav from '../../componnents/RH_Food_Nav/RH_Food_Nav'

const Food = () => {
  return (
    <>
      <div className='HJ_container'>
        <TopbarSearchInput titleBar="Food" />
        <RH_Food_Nav/>
        <Outlet />

      </div>
      

    </>

  )
}

export default Food