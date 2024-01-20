import Topbar from '../../componnents/Topbar/Topbar'
import './Blogs.css'
import  new_article from './../../images/add-circle.svg'
import CardArticle from '../../componnents/CardArticle/CardArticle'
import  article_photo1 from './../../images/Rectangle 23.png'
import  article_photo2 from './../../images/Rectangle 11.png'
import { Link } from 'react-router-dom'
import Calender from '../../componnents/Calender/Calender'

const Blogs = () => {
  return (
    <div className='HJ_container' >
        <Topbar title="Blog"/>
        <div className='HJ_sections'>
          <div className='HJ_sectionOne'>
          <Link to='/new'>
            <button className='HJ_btn'>
                <img src={new_article} alt="new article"/> 
              New Article
            </button>
            </Link>
            <CardArticle image = {article_photo1} />
            <CardArticle image = {article_photo2} />
            <CardArticle image = {article_photo2} />
            <CardArticle image = {article_photo2} />

          </div>
          <div className='HJ_sectionTwo HJ_sectionTwo_space1 '>
            <h3 className='HJ_filterBy'>Filter by</h3>
            <select className='HJ_select_category'>
              <option value="option1">Category</option>
            </select>
            <Calender/>
            <div className='HJ_links '>
              <Link to='/delete_article' className='HJ_link_delete'>Deleted articles</Link>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Blogs