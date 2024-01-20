import './AdminWindow.css'
import logoo from  './../../images/logo.svg'
import  login_image from './../../images/DJI_0080.png'
const AdminWindow = () => {
    return (
        <div className='HJ_login'>
            <div className='HJ_login_section1'>
                <div className='HJ_login_title' >
                    <img src={logoo} alt="logo" className='HJ_logoo' />
                    <p className='HJ_paragraph'>This section is dedicated to admin</p>
                </div>
                <div className='HJ_inputs'>
                    <div>
                        <input type='text' placeholder='User name ' required className='HJ_username' />
                    </div>
                    <div>
                        <input type='text' placeholder='Password' required className='HJ_password' />
                    </div>
                </div>
                <div className='HJ_button'>
                    <button className='HJ_btn_login'>Login</button>
                </div>
            </div>
            <div className='HJ_login_section2'>
                <img src={login_image} alt='login_image' />
            </div>
        </div>
    )
}

export default AdminWindow