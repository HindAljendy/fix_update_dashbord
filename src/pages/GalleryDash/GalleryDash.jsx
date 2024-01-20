import './GalleryDash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from '../../componnents/Topbar/Topbar';
import { Link, Outlet } from 'react-router-dom';


const GalleryDash = () => {

    return (
        <>
            <div className=' HJ_container'>
                <Topbar title='Gallery'/>
                <div className='zh-nav-gallery mb-3'>
                    <nav className='MS_navbar'>
                        <ul>
                            <li><Link to='/gallery/restaurant' >Restaurant</Link></li>
                            <li><Link to='/gallery/chalet' >Chalet</Link></li>
                            <li><Link to='/gallery/activity'>Activity</Link></li>
                            <li><Link to='/gallery/nature' >Nature</Link></li>
                            <li><Link to='/gallery/events' >Events</Link></li>
                        </ul>
                    </nav>
                </div>
                <Outlet/>
             

            </div>

        </>
    )
}

export default GalleryDash