import './CardArticle.css'
import trash from './../../images/trash.svg'
import edit from './../../images/edit.svg'
import see_more from './../../images/icon see more.svg'
import { Link } from 'react-router-dom'
const CardArticle = ({image}) => {
    
  return (
    <div className="HJ_card" >
        <div className="row">
            <div className="col-md-4  HJ_article-img">
                <img src={image}  alt="article" />
            </div>
            <div className="col-md-8">
                <div className="HJ_card-body">
                    <div className='HJ_card-name'>
                        <h4 className="HJ_card-title">Article Name</h4>
                        <h6  className="HJ_text-body-secondary">July 17, 2023</h6>
                    </div>
                    <p className="HJ_card-text"> Dicta modi id optio est rerum repellat ea magnam sunt. Rerum ab dolores tempore. Eveniet odit at quia voluptates facilis ipsa.</p>
                    <p className="HJ_card-text"><small className=" HJ_text-body-secondary">#Syria, #Mountain_Breeze</small></p>
                    <div className='HJ_card-icons'>
                        <div className='HJ_card-icons-first'>
                            <Link to='/edit_article'>
                                    <img src={edit} alt="edit" /> 
                            </Link>
                            <Link to='/pop_up'>
                                    <img src={trash} alt="trash" />
                            </Link>
                        </div>
                        <Link to='/details_article' >
                            <img src={see_more} alt="see more" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  )
 } 

export default CardArticle
