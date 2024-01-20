import gallery_add from './../../../images/gallery-add.svg'
import img11 from './../../../images/img11.png'
import img12 from './../../../images/Rectangle 88.png'
import img21 from './.././../../images/img21.png'
import img22 from './../../../images/img22.png'
import img23 from './../../../images/img23.png'
import video11 from './../../../images/[Sia - Snowman (Lyrics) [status whatsapp 30 second(360P).mp4'
import ZHPhotos from '../../../componnents/ZH_Photos/ZHPhotos'
import ZHVideos from '../../../componnents/ZH_Videos/ZHVideos'
import { Link } from 'react-router-dom'
import PaginateItems from '../../../componnents/paginateItems/PaginateItems'

const NatureGallery = () => {
    return (
    <>
       
        <div className='zh-gallery-dashboard-content'>
            <div className='zh-gallery-title '>
                <p className='zh-gl-title-p'>Images</p>
                <div className='HJ_link_gallery'>
                    <img src={gallery_add} alt='add'/>
                    <Link>Add New Images</Link>
                </div>
            </div>
            <div className='zh-gallery-dashboard'>
                <ZHPhotos img11={img11}
                img12={img12}
                img13={img12}
                img21={img21}
                img22={img22}
                img23={img23}
                img24={img23}/>
                <ZHPhotos img11={img11}
                img12={img12}
                img13={img12}
                img21={img21}
                img22={img22}
                img23={img23}
                img24={img23}/>
                <PaginateItems/>
            </div>
        </div>

        <div className='zh-section2-gl-dashboard2 zh-gallery-dashboard-content mt-5'>
            <div className='zh-gallery-title'>
                <p className='zh-gl-title-p'>Videos</p>
                <div className='HJ_link_gallery'>
                    <img src={gallery_add} alt="gallery add"/> 
                    <Link>Add New Videos</Link>
                </div> 
            </div>
            < div className='zh-gallery-dashboard2 '>
                <ZHVideos
                    video11={video11}
                    poster11={img11}
                    video12={video11}
                    poster12={img12}
                    video13={video11}
                    poster13={img12}
                    video21={video11}
                    poster21={img21}
                    video22={video11}
                    poster22={img22}
                    video23={video11}
                    poster23={img23}
                    video24={video11}
                    poster24={img23}
                />
                <PaginateItems/>
            </div>
        </div>
    
            
    </>
        
    )
}

export default NatureGallery