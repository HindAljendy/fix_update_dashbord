import './FoodCard.css'
import FoodImage from './../../images/Pizza.png'
import trash from './../../images/trash.svg'
import edit from './../../images/edit.svg'
import { Link } from 'react-router-dom'

const FoodCard = () => {
  return (
    <div className="card_food" >
        <div className="row12">
            <div className=" RH_food_img">
                <img src={FoodImage}  alt="food" /> 
            </div>
                <div className="RH_card-body">
                    <div className='RH_card-name'>
                        <h4 className="RH_card-title">Pizza</h4>
                    </div>
                    <p className="RH_card-text">With the best luxury spa, Gym and Pool experiences. </p>
                    <div className='RH_card-icons'>
                        <div className='RH_card-icons-first'>
                            <Link to='/edit_food'>
                                <img src={edit} alt="edit" /> 
                            </Link>
                            <Link to='/popup_food'>
                                <img src={trash} alt="trash" />
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default FoodCard