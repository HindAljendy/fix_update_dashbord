// import React from 'react'
// import gallery from './../../images/gallery_small.svg'
// import small_photo from './../../images/Rectangle 113.png'
// import attach_small from './../../images/attachsquare_small.svg'
// import download from './../../images/inbox2 arrowcircledown2.svg'
// import option from './../../images/ic_baseline-more-vert.svg'
// import trash from './../../images/delete small.svg'



// const MessageDetails = ({id,Name,Date,Email,Subject,Message,Phone}) => {
//   return (
//           <div className='container'>
//                  <div className='content'>
//                         <div className='d-flex content_inbox_space'>
//                             <div className='lineheight'>
//                                 <p className='text-bold'>{data.full_name}</p>
//                                 <p >{data.email}</p>
//                             </div>
//                             <div className='ml-auto '>
//                                 <span>{data.created_at}</span>
//                                 <img src={trash} alt='delete ' className='icon_content_trash'/>
//                                 <img src={option}  alt='option'  className='icon_content_option' />
//                             </div>
//                         </div>
//                         <div>
//                             <p className='text-bold mt-4'>{data.subject}</p>
//                             <p className='mb-4'>{data.message}.</p>
//                         </div>
//                         <div className='d-flex justify-content-between'>
//                             <span className='text-bold'>Phone : {data.phone}</span>
//                             <span  className='download_content' >Download all <img src={download} alt='' /></span>
//                         </div>
//                         <div className='images_attachment'>
//                             <img src={ small_photo} alt="link" className='mr-2 img_attach' />
//                             <img src={ small_photo} alt="link" className='mr-2 img_attach img_attach_margin ' />
//                             <img src={ small_photo} alt="link" className='mr-2 img_attach img_attach_margin_space' />
//                             <img src={ small_photo} alt="link" className='mr-2 img_attach' />

//                         </div>
                        

//                     </div>


//                     <h3 className='beforeAndAfter text-bold'>Reply</h3>
//                     <div className='content'>
//                         <div className=' d-flex'>
//                             <p className='d-inline'>Start writing your <span className="color-blue"> response</span> or <span className='color-blue'>forward</span> message...</p>
//                             <img src={option} alt='option' className='margin_option' />
//                         </div>
//                         <div className='d-flex mt-3 images_with_botton'>
//                             <div>
//                               <img src={attach_small} alt='attach' />
//                               <img src={gallery} alt='gallery' className='gallery_margin' />
//                             </div>
//                             <button className='btn btn-primary ml-auto'>Send</button>
//                         </div>
//                     </div>

//                 </div>  
//   )
// }

// export default MessageDetails