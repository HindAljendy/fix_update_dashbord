import './CardArticle.css'
import trash from './../../images/trash.svg'
import edit from './../../images/edit.svg'
import see_more from './../../images/icon see more.svg'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { useState } from 'react'
import axios from 'axios';

const CardArticle = ({ id , image , Title , Tags , description}) => {
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
          await axios.delete(`http://127.0.0.1:8000/api/articles/${id}` , {headers})
          window.location.reload()
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };

  return (
    <div className="HJ_card" >
        <div className="row">
            <div className="col-md-4  HJ_article-img">
                <img src={image}  alt="article" />
            </div>
            <div className="col-md-8">
                <div className="HJ_card-body">
                    <div className='HJ_card-name'>
                        <h4 className="HJ_card-title">{Title}</h4>
                        <h6  className="HJ_text-body-secondary">July 17, 2023</h6>
                    </div>
                    <p className="HJ_card-text">{description}</p>
                    <p className="HJ_card-text"><small className=" HJ_text-body-secondary">{Tags}</small></p>
                    <div className='HJ_card-icons'>
                        <div className='HJ_card-icons-first'>
                            <Link to={`/edit_article/${id}`}>
                                    <img src={edit} alt="edit" /> 
                            </Link>
                            <Link to='/'
                            onClick={ () => closeModal()}
                            >
                                    <img src={trash} alt="trash" />
                            </Link>
                        </div>
                        <Link to='/details_article' >
                            <img src={see_more} alt="see more" />
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

export default CardArticle
