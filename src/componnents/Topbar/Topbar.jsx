import './Topbar.css'
import  icon_profile  from   './../../images/profile-circle.svg'
import  icon_notification from './../../images/notification.svg'
const Topbar = ({title}) => {
  return (
    <div className='HJ_topbar'>
      <h4>{title}</h4>
      <div className='HJ_topbar_icons'>
          <img src={icon_notification} alt="notification" />
          <img src={icon_profile} alt="profile" />
          <h4>Admin name</h4>
      </div>

    </div>
    
  )
}

export default Topbar

