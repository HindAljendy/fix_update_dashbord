import './CardsRoomsDeleted.css'
import imgroom from './../../images/room.png'
import edit_red from './../../images/edit_red.svg'
import recovery from './../../images/recovery-convert.svg'
import { Link } from 'react-router-dom'
import iconimg1 from './../../images/Vector.svg'
import iconimg2 from './../../images/Group (1).svg'
import iconimg3 from './../../images/Vector (3).svg'
import iconimg4 from './../../images/Group.svg' 

const CardsRoomsDeleted = () => {
  return (
    <div className="card_room card_room_space" >
        <div className="row12">
            <div className="HJ_room-img">
                <img src={imgroom}  alt="room" />
            </div>
                <div className="HJ_card-body">
                    <div className='HJ_card-name'>
                        <h4 className="HJ_card-title">Duplex Room</h4>
                        <div className='Room_card-icons'>
                            <div className='Room_card-icons-first'>
                                <Link to='/edit_room'>
                                    <img src={edit_red} alt="edit" /> 
                                </Link>
                                <Link>
                                    <img src={recovery} alt="recovery" /> 
                                </Link>
                            </div>
                    </div>
                    </div>
                    <p className="HJ_card-text"> 2 floors suitable for families</p>
                    <p className="HJ_card-text_paragraph ">Newly refurnished luxury accommodation with finest quality
                        linen & quality decor. Air Conditioning Electric Blankets,
                        Ironing Boards, Mini Bar, Flat Screen & Free In house Movies,
                        WiFi and Housekeeping by request.
                    </p>
                    <div className='room_card_icons'>
                        <div className='space_icons'>
                            <img  className='size_img_room' src={iconimg1}  alt="room" /> 
                            <h6 className='size_font_room'>4 Persons</h6>
                        </div>
                        <div className='space_icons'>
                            <img  className='size_img_room' src={iconimg2}  alt="room" /> 
                            <h6 className='size_font_room'>Room Services</h6>
                        </div>
                        <div className='space_icons'>
                            <img  className='size_img_room' src={iconimg3}  alt="room" /> 
                            <h6 className='size_font_room'>Kingsize Bed</h6>
                        </div>
                        <div className='space_icons'>
                            <img  className='size_img_room' src={iconimg4}  alt="room" /> 
                            <h6 className='size_font_room '>TV</h6>
                        </div>
                    </div>
                    <div className='room_features'>
                        <span className='pice_room'>$500</span>
                        <span className='time_room'>Per Night</span>
                    </div>
            
                </div>  
    </div>
</div> 
  )
}

export default CardsRoomsDeleted