import Topbar from '../../componnents/Topbar/Topbar'
import { Outlet } from 'react-router-dom'
import EXNavbar from '../../componnents/Explor-nav_Maya/Explor-nav'
import React, { useState } from 'react';
import Modal from 'react-modal'; 

const PopUpExplore = () => {
    const [Open, setOpen] = useState(true);

    const ModalClose = () => {
        setOpen(false);
    }
  return (
    <div className='HJ_container' >
        <Topbar title="Explore"/>
        <EXNavbar />
        <Outlet/>
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

export default PopUpExplore