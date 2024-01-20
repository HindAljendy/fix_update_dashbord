import   './Sidebar.css'
import {FaBars} from 'react-icons/fa'
import logo from  './../../images/logo.svg'
import blogger from  './../../images/blogger.svg'
import gallery from './../../images/gallery.svg'
import lamp from './../../images/lamp.svg'
import booking from './../../images/menu-board.svg'
import inbox from './../../images/INBOX.svg'
import explore from './../../images/search-status.svg'
import  food from './../../images/directbox-notif.svg'
import {  Link } from 'react-router-dom'
import { useState } from 'react'
const Sidebar = () => {
  const [isOpen , setIsOpen] = useState(true);
  const toggle = ()=> setIsOpen (!isOpen);

 const [activeItem , setActiveItem] = useState(null);
  const handleItemClick = (item)=>{
    setActiveItem(item);
  }; 

  return (
    <div style={{width: isOpen ? "22%" : "12%"}} className='HJ-sidebar'>
      <div className='HJ-sidebar-title'>
        <div  style={{ display: isOpen ? "block" : "none"}} className='HJ-brand'>
          <img  src={logo} alt="logo" />
        </div>
        <div style={{marginLeft : isOpen ? "40px" : "50px"}} className='HJ-bars'>
          < FaBars onClick={toggle}/>
        </div>

      </div>
      
      <ul className='HJ-sidebar-list'>
        <li className='HJ-sidebar-list-item' >
          <Link  to='/' className={activeItem === 'item1' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item1') }} >
            <img   src={blogger} alt='blogger' />
            <span style={{ display: isOpen ? "block" : "none"}}>Blogs</span>
          </Link>
        </li>
        <li className='HJ-sidebar-list-item'>
          <Link to='/gallery' className={activeItem === 'item2' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item2') }}  >
            <img  src={gallery} alt='gallery' />
            <span style={{ display: isOpen ? "block" : "none"}}>Gallerry</span>
          </Link>
        </li>
        <li className='HJ-sidebar-list-item' >
          <Link to='/room' className={activeItem === 'item3' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item3') }}  >
            <img  src={lamp} alt='rooms' />
            <span style={{ display: isOpen ? "block" : "none"}}>Rooms</span>
          </Link>
        </li>
        <li className='HJ-sidebar-list-item' >
          <Link to='/booking' className={activeItem === 'item4' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item4') }}  >
            <img  src={booking} alt='booking' />
            <span style={{ display: isOpen ? "block" : "none"}}>Booking</span>
          </Link>
        </li>
        <li className='HJ-sidebar-list-item' >
          <Link to='/explore' className={activeItem === 'item5' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item5') }} >
            <img  src={explore} alt='explore' />
            <span style={{ display: isOpen ? "block" : "none"}}>Explore</span>
          </Link>
        </li>
        <li className='HJ-sidebar-list-item' >
          <Link to='/food' className={activeItem === 'item6' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item6') }}  >
            <img   src={food} alt='food' />
            <span style={{ display: isOpen ? "block" : "none"}}>Foods</span>
          </Link>
        
        </li>
        <li className='HJ-sidebar-list-item HJ_inbox' >
          <Link to='/inbox ' className={activeItem === 'item7' ? ' HJ_active' : ''} onClick={()=>{
            handleItemClick('item7') }} >
            <img  src={inbox} alt='inbox' />
            <span style={{ display: isOpen ? "block" : "none"}}>Inbox</span>
          </Link> 
        </li>
      </ul>
      </div>
  )
}

export default Sidebar 