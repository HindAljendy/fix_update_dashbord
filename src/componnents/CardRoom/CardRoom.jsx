import './CardRoom.css'
import trash from './../../images/trash-black.svg'
import edit from './../../images/edit-black.svg'
import { Link } from 'react-router-dom'
import iconimg1 from './../../images/Vector.svg'
import iconimg2 from './../../images/Group (1).svg'
import iconimg3 from './../../images/Vector (3).svg'
import iconimg4 from './../../images/Group.svg'
import Modal from 'react-modal';
import { useState } from 'react'
import axios from 'axios'

const CardRoom = ({ id, Title, samary, description, GuestNumper, Services, prisePerNight, imgroom }) => {

    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem('token');

    const closeModal = () => {
        setIsOpen(!isOpen);
    }

    const handleDelete = async () => {
        try {
            const headers = {
                'Accept': 'application/json',
                'Authorization': token,
            };
            await axios.delete(`http://127.0.0.1:8000/api/rooms/${id}`, { headers })
            window.location.reload()
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="card_room" >
            <div className="row12">
                <div className="HJ_room-img">
                    <img src={imgroom} alt="room" />
                </div>
                <div className="HJ_card-body">
                    <div className='HJ_card-name'>
                        <h4 className="HJ_card-title">{Title}</h4>
                        <div className='Room_card-icons'>
                            <div className='Room_card-icons-first'>
                                <Link to='/edit_room'>
                                    <img src={edit} alt="edit" />
                                </Link>
                                <Link to='/room'
                                    onClick={() => closeModal()}
                                >
                                    <img src={trash} alt="trash" />

                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="HJ_card-text">{samary}</p>
                    <p className="HJ_card-text_paragraph ">{description}
                    </p>
                    <div className='room_card_icons'>
                        <div className='space_icons'>
                            <img className='size_img_room' src={iconimg1} alt="room" />
                            <h6 className='size_font_room'>{GuestNumper}</h6>
                        </div>
                        <div className='space_icons'>
                            <img className='size_img_room' src={iconimg2} alt="room" />
                            <h6 className='size_font_room'>{Services}</h6>
                        </div>
                        <div className='space_icons'>
                            <img className='size_img_room' src={iconimg3} alt="room" />
                            <h6 className='size_font_room'>Kingsize Bed</h6>
                        </div>
                        <div className='space_icons'>
                            <img className='size_img_room' src={iconimg4} alt="room" />
                            <h6 className='size_font_room '>TV</h6>
                        </div>
                    </div>
                    <div className='room_features'>
                        <span className='pice_room'>{prisePerNight}$</span>
                        <span className='time_room'>Per Night</span>
                    </div>

                </div>
            </div>
            <div className='HJ_screen_popup'>
                <Modal isOpen={isOpen} onRequestClose={closeModal} className="HJ_modal_popUp">
                    <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
                        <div className="ReactModal__Content ReactModal__Content--after-open HJ_modal_popUp" tabindex="-1" role="dialog" aria-modal="true">
                            <div class="ReactModal__Body--open">
                                <h2>Delete the article?</h2>
                                <p>You can be able to recover it</p>
                                <div>
                                    <button className='btn_cancel'
                                        onClick={() => closeModal()}
                                    >cancel</button>
                                    <button className='HJ_btn' onClick={() => handleDelete()}>Delete Article</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>

            </div>
        </div>
    )
}

export default CardRoom