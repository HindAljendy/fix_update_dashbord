import './Rooms.css'
import { Link } from 'react-router-dom'
import Topbar from '../../componnents/Topbar/Topbar'
import new_room from './../../images/add-circle.svg'
import CardRoom from '../../componnents/CardRoom/CardRoom'


const Rooms = () => {
    return (
        <div className='HJ_container'>
            <Topbar title="Rooms" />
            <div className='HJ_sections'>
                <div className='HJ_sectionOne'>
                   
                        <Link to='/New_Room'>
                        <button className='HJ_btn'>
                            <img src={new_room} alt="new room" />
                            New Room
                            </button>
                        </Link>
                    
 
                    <CardRoom/>
                    <CardRoom/>
                </div>
                <div className='HJ_sectionTwo HJ_sectionTwo_space1  AD_FilterBy'>
                    <h3 className='HJ_filterBy'>Filter by</h3>
                    <select className='AD_select_pageRoom'>
                        <option value="room">Room Type</option>
                    </select>
                    <select className='AD_select_pageRoom'>
                        <option value="room">guests Number</option>
                    </select>
                    <select className='AD_select_pageRoom'>
                        <option value="room">Room Price</option>
                    </select>
                    <div className='AD_links_room'>
                        <Link to='/delete_room' className='HJ_link_delete'>Deleted rooms</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rooms


