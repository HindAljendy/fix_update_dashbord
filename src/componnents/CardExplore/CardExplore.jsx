import trash_black from './../../images/trash-black.svg'
import edit_black from './../../images/edit-black.svg'
import { Link } from 'react-router-dom'
import './CardExplore.css'

const CardExplore = ({image}) => {
  return (
    <div className="HJ_card explore_card" >
    <div className="row12">
        <div className="col-md-3  HJ_article-img">
            <img src={image}  alt="article" />
        </div>
        <div className="col-md-922 ">
            <div className="HJ_card-body HJ_card_body_explore">
                <div className='HJ_card-name'>
                    <h4 className="HJ_card-title">Article Name</h4>
                    <h6  className="HJ_text-body-secondary">July 17, 2023</h6>
                </div>
                <p className="HJ_card-text"> Dicta modi id optio est rerum repellat ea magnam sunt. Rerum ab dolores tempore. Eveniet odit at quia voluptates facilis ipsa.Dicta modi id optio est rerum repellat ea magnam sunt. Rerum ab dolores tempore.</p>
                <p className="HJ_card-text"><small className=" HJ_text-body-secondary">#Syria, #Mountain_Breeze</small></p>
                <div className='HJ_card-icons'>
                    <div className='HJ_card-icons-first'>
                        <Link to='/edit_explore'>
                                <img src={edit_black} alt="edit"  /> 
                        </Link>
                        <Link to='/popup_explore' >
                                <img src={trash_black} alt="trash" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default CardExplore

