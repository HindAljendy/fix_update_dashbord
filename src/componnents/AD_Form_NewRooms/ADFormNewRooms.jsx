import './AD_Form_NewRooms.css'
import small_photo from './../../images/Rectangle 113.png'
import { useState } from 'react'
import ImageSmallDrop from '../ImageSmallDrop/ImageSmallDrop'

const ADFormNewRooms = () => {
    const [roomName, setRoomName] = useState(''); /* input */
    const [roomType, setRoomType] = useState('');  /* select */
    const [guestNumber, setGuestNumber] = useState(''); /* select */
    const [roomPrice, setRoomPrice] = useState('');    /* input */
    const [descriptionRoom, setDescriptionRoom] = useState(''); /* descriprion */
   
    const [focused, setFocused] = useState(false);
    const [focusedTwo, setFocusedTow] = useState(false);
    
    const handleFocus = () => {
        setFocused(true);
    };
    const handleFocusTwo = () => {
        setFocusedTow (true);
    };

    const handleRoomName = (e) => {
        setRoomName(e.target.value);
    }
    const handleRoomPrice = (e) => {
        setRoomPrice(e.target.value);
    }
    const handleRoomType = (e) => {
        setRoomType(e.target.value);
    }
    const handleGuestNumber = (e) => {
        setGuestNumber(e.target.value);
    }
    const handleDescriptionRoom = (e) => {
        setDescriptionRoom(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={handleSubmit} className='HJ_form'>
            <div className='AD_FormRoom_part1'>
                <div className='AD_inputBox'>
                    <input className='AD_input' type="text" value={roomName} onChange={handleRoomName}  required />
                    <span>Room Name</span>
                </div>
                <div className='AD_floating'>
                    <label className={focusedTwo ? 'focused' : ''}>Room Type</label>
                    <select name='types'  onFocus={handleFocusTwo} value={roomType} onChange={handleRoomType} className='AD_select' required>
                        <option  value="Room Type"  ></option>
                    </select>
                </div>
            </div>

            <div className='AD_FormRoom_part2'>
                <div className='AD_form_select'>
                    <label className={focused ? 'focused' : ''}>Guests Number</label>
                    <select  name="numbers"  onFocus={handleFocus} value={guestNumber} onChange={handleGuestNumber} className='AD_select' required>
                        <option  value="guest number"  ></option>
                    </select>
                </div>
                <div className='AD_inputBox AD_space'>
                    <input className='AD_input ' type="text" value={roomPrice} onChange={handleRoomPrice}  required />
                    <span>Room price</span>
                </div>
            </div>

            <div className='AD_FormRoom_part3 my-4'>
                <label>Description</label>
                <input type="text" value={descriptionRoom}   onChange={handleDescriptionRoom} className='AD_description' />
            </div>

            <div className='AD_FormRoom_images'>
                <h3 className='AD_title_photos'>Photos</h3>
                <ul className='AD_ul'>
                    <li><img className='AD_imageRoom' src={small_photo} alt="room" /></li>
                    <li><img className='AD_imageRoom' src={small_photo} alt="room" /></li>
                    <li><img className='AD_imageRoom' src={small_photo} alt="room" /></li>
                    <li><img className='AD_imageRoom' src={small_photo} alt="room" /></li>
                    <li><img className='AD_imageRoom'  src={small_photo} alt="room" /></li>
                    <li><img className='AD_imageRoom' src={small_photo} alt="room" /></li>
                    <li><img className='AD_imageRoom' src={small_photo} alt="room" /></li>
                    <li> 
                      
                        <ImageSmallDrop/>
                    </li>
                </ul>
            </div>

            <div className='AD_form_buttons AD_buttons_space'>
                <button  className='btn_cancel'>Cancel</button> 
                <button  type='submit' className='HJ_btn'>Add Room</button> 
            </div> 


        </form>
    )
}

export default ADFormNewRooms
