import { Link } from 'react-router-dom'
import './Explor-nav.css'

function EXNavbar() {
  return (
    <nav className='MS_navbar'>
          <ul>
            <li><Link to='/explore/restaurant' >Restaurant</Link></li>
            <li><Link to='/explore/chalet' >Chalet</Link></li>
            <li><Link to='/explore/activity'>Activity</Link></li>
            <li><Link to='/explore/nature' >Nature</Link></li>
            <li><Link to='/explore/pool' >Pool</Link></li>
            <li><Link to='/explore/events' >Events</Link></li>

          </ul>
          
    </nav>


  )
}

export default EXNavbar