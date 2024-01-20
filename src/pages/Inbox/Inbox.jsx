import './Inbox.css'
import MessageDisplay from '../../componnents/MessageDisplay/MessageDisplay';
import attach from './../../images/attachsquare.svg'
import filter from './../../images/frame.svg'
import trash from './../../images/delete small.svg'
import { useState } from 'react'
import Topbar from '../../componnents/Topbar/Topbar'
import MessageDetails from '../../componnents/MessageDetails/MessageDetails';

const InboxComponnent = () => {

    const [activeItem , setActiveItem] = useState(null);
    const handleItemClick = (item)=>{
      setActiveItem(item);
    };
    const [show, setShow] =  useState(true);
    const handleCheckboxChange = () => {
        setShow(!show);
        setMessage(!message); 
    };
    const [message, setMessage] = useState(false);

    return (
        <div className='HJ_container rh-inbox'>
            <Topbar title="Inbox" />
            <div className="border-b">
                <div className="toolbar">
                    <div>
                        <input type="checkbox" name="select" className='select_inbox'  />  
                        <img src={filter} alt='filter'  className='filter_inbox' />
                        
                    </div>
                    <img src={trash} alt='delete'/>
                </div>


            </div>

            <div className='d-flex'>
                <div className='Myscroll'>
                    <div className="list">


                        <div className={activeItem === 'item1' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item1') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox'  onChange={handleCheckboxChange } />
                                        
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>

                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>

                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item2' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item2') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox'  onChange={handleCheckboxChange } />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item3' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item3') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox'  onChange={handleCheckboxChange } />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item4' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item4') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item5' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item5') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item6' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item6') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={activeItem === 'item7' ? ' inbox_active' : ''} onClick={()=>{ handleItemClick('item7') }} >
                            <div className="rh-item justify-content-between active d-flex">
                                <div>
                                
                                    <div className='part_names' >
                                        <div className='part_name_ms'>
                                            <input type="checkbox" name="select" className='select_inbox' />
                                            <div>
                                                <div className='seen'></div>
                                                <span>ola abdalrahman </span>

                                            </div>
                                        </div> 
                                        <div className='ml-5'>July 17, 2023</div>
                                    </div>
                                    <div className='part_photo_ms'>
                                        <p className='text-bold'>photo for project</p>
                                        <div className="d-flex">
                                            <p>Hello, Here're some photos to f..</p>
                                            <img src={attach} alt='attach' className='img_attach_inbox' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

              
            
                { show && <MessageDisplay />}
                {message && <MessageDetails />}


            </div>


        </div>
    )
}

export default InboxComponnent



