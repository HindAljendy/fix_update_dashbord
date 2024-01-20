import BookingCard from "../../componnents/BookingCard/BookingCard"
import Calender from "../../componnents/Calender/Calender"
import Topbar from "../../componnents/Topbar/Topbar"

const Booking = () => {
  return (
    <div className="HJ_container">
      <Topbar title="Booking"/>
      <div className="HJ_sections">
        <div className="HJ_sectionOne">
          <BookingCard/>
          <BookingCard/>

        </div>
        <div className='HJ_sectionTwo HJ_filter_sectionTwo_space2 AD_FilterBy '>
           <h3 className='HJ_filterBy'>Filter by</h3>
           <select className='AD_select_pageRoom'>
              <option value="room">Room Type</option>
            </select>
            <select className='AD_select_pageRoom'>
              <option value="room">guests Number</option>
            </select>
            <Calender/>
        </div>

      </div>
    

    </div>
    



  )
}

export default Booking