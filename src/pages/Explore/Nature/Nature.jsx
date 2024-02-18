import { Link } from 'react-router-dom'
import  gallery_add from './../../../images/gallery-add.svg'
import PaginateItems from '../../../componnents/paginateItems/PaginateItems'
import ExploreApiTheNature from '../../../Api/ExploreApi/ExploreApiTheNature'

const Nature = () => {
  return (
    < >
      <div className='MS_explore_top'>
        <p className='MS_paragraph'>Articles</p>
        <div className='HJ_form_link HJ_space'>
          <img src={gallery_add} alt="gallery add"/> 
          <Link to='/new_ArticleExplore'>Add New Article</Link>
        </div>
      </div>
      <ExploreApiTheNature />
      <div className='paginate_page'>
        <PaginateItems/>

      </div>


    </>
  )
}

export default Nature






