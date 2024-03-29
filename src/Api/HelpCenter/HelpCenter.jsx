import React, { useState, useEffect } from 'react';
import axios from 'axios';
import attach from './../../images/attachsquare.svg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import filter from './../../images/frame.svg'
import trash from './../../images/delete small.svg'
export default function HelpCenter({ setShow }) {

    const [HelpInbox, setHelpInbox] = useState([]);
    const [ReadedeMasseg, setReadedMasseg] = useState(null)
    const token = localStorage.getItem('token');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setShow(false)
    }

    const closeModal = () => {
        setIsOpen(!isOpen);
    }

    const handleDeleteM = async () => {
        try {
            const headers = {
                'Accept': 'application/json',
                'Authorization': token,
            };
            await axios.delete(`http://127.0.0.1:8000/api/helpCenter?${output}`, { headers })
            
            window.location.reload()
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    
    useEffect(() => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': token,
            }
        };
        // استرجاع البيانات من API باستخدام axios
        axios.get('http://127.0.0.1:8000/api/helpcenter', config)
            .then(response => setHelpInbox(response.data.data))
            .catch(error => console.error(error));

    }, []);

    const handleDelete = async (massegId) => {
        try {
            const headers = {
                'Accept': 'application/json',
                'Authorization': token,
            };

            const updatedData = {
                status: 'read'
            };

            await axios.patch(`http://127.0.0.1:8000/api/readQustions/${massegId}`, updatedData, { headers: headers })
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const [activeItem, setActiveItem] = useState(null);
    const handleCardClick = (massegId) => {
        setActiveItem(massegId);
        setReadedMasseg(massegId)
        handleDelete(massegId)
        handleChange()
    };

    const [selectedCards, setSelectedCards] = useState([]);
    let output = '';

    const handleCheckboxChange = (cardId) => {
        if (selectedCards.includes(cardId)) {
            setSelectedCards(selectedCards.filter(id => id !== cardId));
        } else {
            setSelectedCards([...selectedCards, cardId]);
        }
    };

    for (let i = 0; i < selectedCards.length; i++) {
        output += 'deleted_ids[' + i + ']=' + selectedCards[i] + '&';
    }
    return (
        <div className='FQ-TEXTremove'>
            <div className="border-b">
                <div className="toolbar">
                    <div>
                        <input type="checkbox" name="select" className='select_inbox' />
                        <img src={filter} alt='filter' className='filter_inbox' />

                    </div>
                    <Link to='/inbox'
                            onClick={ () => closeModal()}
                            >
                                    <img src={trash} alt="trash" />
                            </Link>
                </div>


            </div>
            {HelpInbox.map(item => (

                <div key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    className={activeItem === item.id ? ' inbox_active' : ''}
                >
                    {
                        <div className="rh-item justify-content-between active d-flex">
                            <div>

                                <div className='part_names' >
                                    <div className='part_name_ms'>
                                        <input type="checkbox" name="select" className='select_inbox' id={item.id}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />

                                        <div>
                                            {item.status === "Unread" ? <div className='seen'></div> : <div className='seen1'></div>}
                                            <span>{item.full_name}</span>

                                        </div>

                                    </div>
                                    <div className='ml-5'>{item.created_at}</div>
                                </div>

                                <div className='part_photo_ms'>
                                    <p className='text-bold'>{item.subject}</p>
                                    <div className="d-flex">
                                        <p>Hello, Here're some issuses to f..</p>
                                        <Link to={`/inbox/${item.id}`}>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                </div>


            ))
            }
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
                                        <button className='HJ_btn' onClick={() => handleDeleteM()}>Delete Article</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal>

                </div>
        </div>
    )
}
