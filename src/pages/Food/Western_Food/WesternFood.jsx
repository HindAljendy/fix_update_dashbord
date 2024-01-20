import { Link } from 'react-router-dom'
import  food_add from './../../../images/gallery-add.svg'
import FoodCard from '../../../componnents/FoodCard/FoodCard'
import PaginateItems from '../../../componnents/paginateItems/PaginateItems'

const WesternFood = () => {
  return (
      <>
        <div className='MS_food_top'>
          <p className='MS_paragraph'>Images</p>
          <div className='RH_link_food'>
            <img src={food_add} alt="food add" />
            <Link to='/new_Food'>Add New Food</Link>
          </div>
        </div>
        <div className='RH_content_margin'>
          <div className='RH_scope_food' >
            <div className='RH_cards_food'>
              <div className='RH_cards_food_column1'>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
              </div>
              <div className='RH_cards_food_column2'>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
              </div>

            </div>
            <div className='paginate_page_food'>
            <PaginateItems/>

          </div>
          </div>
          

        </div>


      </>
  )
}

export default WesternFood