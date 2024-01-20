import './TopbarSearchInput.css'
import  icon_notification from './../../images/notification.svg'
import  icon_profile  from   './../../images/profile-circle.svg'
import     search    from './../../images/Dribbble-Light-Preview.svg'
import { useState } from 'react'

const TopbarSearchInput = ({titleBar}) => {
    const [searchTerm , setSearchTerm]=useState('');
    const handleSearch =(e)=>{
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className='HJ_topbar'>
            <h4>{titleBar}</h4>
            <div className='HJ_topbar_search'>
                <input type='text' placeholder='Search' value={searchTerm} onChange={handleSearch} className='HJ_search'/>
                <img src={search} alt='search' className='HJ_image_search'/>
            </div>
            <div className='HJ_topbar_icons'>
                <img src={icon_notification} alt="notification" />
                <img src={icon_profile} alt="profile" />
                <h4>Admin name</h4>

            </div>

    </div>
    )
    }

export default TopbarSearchInput