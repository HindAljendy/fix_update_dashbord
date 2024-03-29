import { Link } from 'react-router-dom'
import CardExplore from '../../../componnents/CardExplore/CardExplore'
import  gallery_add from './../../../images/gallery-add.svg'
import  article_photo1 from './../../../images/Rectangle 23.png'
import PaginateItems from '../../../componnents/paginateItems/PaginateItems'
import ExploreApiActiveties from '../../../Api/ExploreApi/ExploreApiActiveties'

const Activity = () => {
  return (
    <>
      <div className='MS_explore_top'>
        <p className='MS_paragraph'>Articles</p>
        <div className='HJ_form_link HJ_space'>
          <img src={gallery_add} alt="gallery add"/> 
          <Link to='/new_ArticleExplore'>Add New Article</Link>
        </div>
      </div>
      <ExploreApiActiveties/>
      <div className='paginate_page'>
        <PaginateItems/>

      </div>
    
    </>
  
  )
}

export default Activity