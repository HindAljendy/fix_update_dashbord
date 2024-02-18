import './PopUp.css'
import React, { useState } from 'react';

import Topbar from '../../componnents/Topbar/Topbar'
import new_article from './../../images/add-circle.svg'
import article_photo1 from './../../images/Rectangle 23.png'
import article_photo2 from './../../images/Rectangle 11.png'
import { Link } from 'react-router-dom';
import CardArticle from './../../componnents/CardArticle/CardArticle'

const PopUp = () => {
    
    return (
        <div className='HJ_container'>
            <div className='HJ_screen_main'>
                <Topbar title="Blog" />
                <div className='HJ_sections'>
                    <div className='HJ_blog_sectionOne'>
                        <button className='HJ_btn'>
                            <Link to='/new'>
                                <img src={new_article} alt="new article" />
                            </Link>
                            New Article
                        </button>
                        <CardArticle image={article_photo1} />
                        <CardArticle image={article_photo2} />
                        <CardArticle image={article_photo2} />
                        <CardArticle image={article_photo2} />
                    </div>
                    <div className=' HJ_sectionTwo HJ_sectionTwo_space1 space_left '>
                        <h3 className='HJ_filterBy'>Filter by</h3>
                        <select className='HJ_select_category'>
                            <option value="option1">Category</option>
                        </select>
                        <div className='HJ_links'>
                            <Link to='/delete_article' className='HJ_link_delete'>Deleted articles</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default PopUp
