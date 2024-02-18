import { Link } from 'react-router-dom'
import food_add from './../../../images/gallery-add.svg'
import WesternAPI from '../../../Api/Food/WesternAPI'
import { useState } from 'react'

const WesternFood = () => {

  const [start , setstart] = useState(0)
  const [end , setend] = useState(6)

  const handelNextclick = () =>
  {
    setstart(start + 6)
    setend(end + 6)
  }

  const handelPrevclick = () =>
  {
    setstart(start - 6)
    setend(end - 6)
  }

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
              <WesternAPI 
              start = {start}
              end = {end}
              />
            </div>
          </div>
          <div className='PAgenat'>
            <button
            onClick={() =>  handelPrevclick()}
            className={start == 0 ? 'DisActiv' : ''}
            >P</button>
            <button>{end/6}</button>
            <button>{(end/6) + 1}</button>
            <button>{(end/6) + 2}</button>
            <button
            onClick={() =>  handelNextclick()}
            className={end == 120 ? 'DisActiv' : ''}
            >N</button>
          </div>
        </div>


      </div>


    </>
  )
}

export default WesternFood