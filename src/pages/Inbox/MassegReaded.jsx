// import React, { useState } from 'react'
// 

// export default function MassegReaded({Name,Date,Subject,status}) {


//     const [show, setShow] = useState(true);
//     const [message, setMessage] = useState(false);

//     const handleCheckboxChange = () => {
//         setShow(!show);
//         setMessage(!message);
//     };

//     return (
//         <div><div>
//             <div className="rh-item justify-content-between active d-flex">
//                 <div>

//                     <div className='part_names' >
//                         <div className='part_name_ms'>
//                             <input type="checkbox" name="select" className='select_inbox' onChange={handleCheckboxChange} />

//                             <div>
//                                 {seen === "Unread" ? <div className='seen'></div> : <div className='seen1'></div>}
//                                 <span>{Name}</span>

//                             </div>

//                         </div>
//                         <div className='ml-5'>{Date}</div>
//                     </div>

//                     <div className='part_photo_ms'>
//                         <p className='text-bold'>{Subject}</p>
//                         <div className="d-flex">
//                             <p>Hello, Here're some issuses to f..</p>
//                             <img src={attach} alt='attach' className='img_attach_inbox' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div></div>
//     )
// }
