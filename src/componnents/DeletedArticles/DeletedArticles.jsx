import './DeletedArticles.css'
import CardDelete from '../CardDelete/CardDelete'
import TopbarSearchInput from '../TopbarSearchInput/TopbarSearchInput'
import Calender from '../Calender/Calender'
import DeletedBlogArticle from '../../Api/DeletedBlog'

const DeletedArticles = () => {
  return (
    <div className='HJ_container'>
        <TopbarSearchInput titleBar="Blogs / Deleted blogs"/>
        <div className='HJ_sections'>
          <div className='HJ_sectionOne'>
            <div className='HJ_card_Deletes'>
                {/* <CardDelete image = {article_photo1} /> */}
                <DeletedBlogArticle/>
            </div>
          </div>
          <div className='HJ_sectionTwo HJ_filter_sectionTwo_space2'>
              <h3 className='HJ_filterBy'>Filter by</h3>
              <select className='HJ_select_category'>
                <option value="option1">Category</option>
              </select>
              <Calender/>
          </div>
         

        </div>
    </div>
  )
}

export default DeletedArticles