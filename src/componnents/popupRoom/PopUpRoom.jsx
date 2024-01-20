import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Modal from 'react-modal'; 
import Topbar from '../../componnents/Topbar/Topbar'
import new_room from './../../images/add-circle.svg'
import CardRoom from '../../componnents/CardRoom/CardRoom'


const PopUpRoom = () => {
    const [Open, setOpen] = useState(true);

    const ModalClose = () => {
        setOpen(false);
    }

  return (
    <div className='HJ_container'>
        <Topbar title="Rooms" />
        <div className='HJ_sections'>
            <div className='HJ_sectionOne'>
                <button className='HJ_btn'>
                    <Link to='/New_Room'>
                        <img src={new_room} alt="new room" />
                    </Link>
                    New Room
                </button>
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
        <div className='HJ_screen_popup'>
            <Modal isOpen={Open} onRequestClose={ModalClose} className="HJ_modal_popUp">
                <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
                    <div className="ReactModal__Content ReactModal__Content--after-open HJ_modal_popUp" tabindex="-1" role="dialog" aria-modal="true">
                        <div class="ReactModal__Body--open">
                            <h2>Delete the Room?</h2>
                            <p>You can be able to recover it</p>
                            <div>
                                <button className='btn_cancel'>cancel</button>
                                <button className='HJ_btn' onClick={ModalClose}>Delete Room</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        </div> 
    </div>
  )
}

export default PopUpRoom