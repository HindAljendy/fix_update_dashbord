import trash_black from './../../images/trash-black.svg'
import edit_black from './../../images/edit-black.svg'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import './CardExplore.css'
import axios from 'axios'
import { useState } from 'react'

const CardExplore = ({id , image , Name , description , Date}) => {
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
          await axios.delete(`http://127.0.0.1:8000/api/posts/${id}` , {headers})
          window.location.reload()
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };

  return (
    <div className="HJ_card explore_card" >
    <div className="row12">
        <div className="col-md-3  HJ_article-img">
            <img src={image}  alt="article" />
        </div>
        <div className="col-md-922 ">
            <div className="HJ_card-body HJ_card_body_explore">
                <div className='HJ_card-name'>
                    <h4 className="HJ_card-title">{Name}</h4>
                    <h6  className="HJ_text-body-secondary">{Date}</h6>
                </div>
                <p className="HJ_card-text"> {description}.</p>
                <p className="HJ_card-text"><small className=" HJ_text-body-secondary">#Syria, #Mountain_Breeze</small></p>
                <div className='HJ_card-icons'>
                    <div className='HJ_card-icons-first'>
                        <Link to={`/edit_explore/${id}`}>
                                <img src={edit_black} alt="edit"  /> 
                        </Link>
                        <Link to='/explore' 
                        onClick={ () => closeModal()}
                        >
                                <img src={trash_black} alt="trash" />
                        </Link>
                    </div>
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
                                    onClick={ () => closeModal() }
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

export default CardExplore

