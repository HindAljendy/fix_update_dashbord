import { Link } from 'react-router-dom'
import './RH_Food_Nav.css'

const RH_Food_Nav = () => {
    return (
        <div>
            <nav className='MS_navbar'>
                <ul>
                    <li><Link to='/food/Western_Food' >Western Food</Link></li>
                    <li><Link to='/food/Oriental_Food' >Oriental Food</Link></li>
                    <li><Link to='/food/Traditional_Food'>Traditional Food</Link></li>
                </ul>
            </nav>
        </div>
  )
}

export default RH_Food_Nav