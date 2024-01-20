import React, { useState } from 'react';
import Modal from 'react-modal'; 
import TopbarSearchInput from '../../componnents/TopbarSearchInput/TopbarSearchInput'
import {  Outlet } from 'react-router-dom'
import RH_Food_Nav from '../../componnents/RH_Food_Nav/RH_Food_Nav'

const PopUpFood = () => {
    const [Open, setOpen] = useState(true);

    const ModalClose = () => {
        setOpen(false);
    }
  return (
    <div className='HJ_container'>
        <TopbarSearchInput titleBar="Food" />
        <RH_Food_Nav/>
        <Outlet />
        <div className='HJ_screen_popup'>
            <Modal isOpen={Open} onRequestClose={ModalClose} className="HJ_modal_popUp">
                <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
                    <div className="ReactModal__Content ReactModal__Content--after-open HJ_modal_popUp" tabindex="-1" role="dialog" aria-modal="true">
                        <div class="ReactModal__Body--open">
                            <h2>Delete the Article?</h2>
                            <p>You can be able to recover it</p>
                            <div>
                                <button className='btn_cancel'>cancel</button>
                                <button className='HJ_btn' onClick={ModalClose}>Delete Article</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        </div> 

    </div>
  )
}

export default PopUpFood