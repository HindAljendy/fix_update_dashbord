import './FoodCard.css'
import trash from './../../images/trash.svg'
import edit from './../../images/edit.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal';

const FoodCard = ({ id, FoodImage, Name, discription }) => {

    const [isOpen, setIsOpen] = useState(false);

    const token = localStorage.getItem('token');

    const closeModal = () => {
        setIsOpen(!isOpen);
    }

    const handleDelete = async () => {
        try { 
            const headers = {
            'Accept': 'application/json',
            'Authorization':token,
          };
          await axios.delete(`http://127.0.0.1:8000/api/foods/${id}` , {headers})
          window.location.reload()
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };

    return (
        <div className="card_food" >
            <div className="row12">
                <div className=" RH_food_img">
                    <img src={FoodImage} alt="food" />
                </div>
                <div className="RH_card-body">
                    <div className='RH_card-name'>
                        <h4 className="RH_card-title">{Name}</h4>
                    </div>
                    <p className="RH_card-text">{discription}.</p>
                    <div className='RH_card-icons'>
                        <div className='RH_card-icons-first'>
                            <Link to={`/edit_food/${id}`}>
                                <img src={edit} alt="edit" />
                            </Link>
                            <Link to='/food'
                             onClick={ () => closeModal()}
                            >
                                <img src={trash} alt="trash" />
                            </Link>
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
        </div>

    )
}

export default FoodCard