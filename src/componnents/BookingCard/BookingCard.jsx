import './BookingCard.css'
import trash from './../../images/trash-black.svg'
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

export default function BookingCard({ id, name, Phone, Check_in, Room_type, E_mail, Check_out, guests_Number, Description }) {

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
            await axios.delete(`http://127.0.0.1:8000/api/bookings/${id}`, { headers })
            window.location.reload()
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="booking-card rh-card">
            <div className="information ">
                <h3>{name}</h3>
                <span className="font-1">July 17, 2023</span>
            </div>
            <div className="information">
                <div>
                    <span className='information_font'>Phone :</span>
                    <span className='personal_information_font'>{Phone}</span>
                </div>

                <div>
                    <span className='information_font'>Check-in date :</span>
                    <span className='personal_information_font'>{Check_in}</span>
                </div>

                <div>
                    <span className='information_font'>Room type :</span>
                    <span className='personal_information_font'>{Room_type}</span>
                </div>
            </div>

            <div className="information">
                <div>
                    <span className='information_font'>E-mail :</span>
                    <span className='personal_information_font'>{E_mail}</span>
                </div>

                <div>
                    <span className='information_font'>Check-out date :</span>
                    <span className='personal_information_font'>{Check_out}</span>
                </div>

                <div>
                    <span className='information_font'>guests Number :</span>
                    <span className='personal_information_font'>{guests_Number}</span>
                </div>
            </div>


            <div className="description">
                <span className='description_font'>Description</span>
                <p className='personal_description_font'>{Description}.</p>
            </div>
            <div className='trash-fq-absolute'
                onClick={() => closeModal()}
            >
                <img src={trash} alt="" />
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