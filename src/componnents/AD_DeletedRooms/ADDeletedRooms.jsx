import './ADDeletedRooms.css'
import CardsRoomsDeleted from '../CardsRoomsDeleted/CardsRoomsDeleted'
import Topbar from '../Topbar/Topbar'

const ADDeletedRooms = () => {
  return (
    <div className='HJ_container'>
        <Topbar title="Rooms / Deleted Rooms " />
        <div className='HJ_sections'>
                <div className='HJ_sectionOne'>
                    <CardsRoomsDeleted/>
                    <CardsRoomsDeleted/>
               
                </div>
                <div className='HJ_sectionTwo HJ_sectionTwo_space_room  AD_FilterBy'>
                    <h3 className='HJ_filterBy'>Filter by</h3>
                    <select className='AD_select_pageRoom'>
                        <option value="room">Room Type</option>
                    </select>
                    <select className='AD_select_pageRoom'>
                        <option value="room">guests number</option>
                    </select>
                    <select className='AD_select_pageRoom'>
                        <option value="room">room price</option>
                    </select>
                </div>
        </div>


    </div>
  )
}

export default ADDeletedRooms



