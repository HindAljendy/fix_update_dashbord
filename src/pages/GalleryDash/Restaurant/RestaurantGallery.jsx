import gallery_add from './../../../images/gallery-add.svg'
import img11 from './../../../images/img11.png'
import img12 from './../../../images/Rectangle 88.png'
import img21 from './.././../../images/img21.png'
import img22 from './../../../images/img22.png'
import img23 from './../../../images/img23.png'
import video11 from './../../../images/[Sia - Snowman (Lyrics) [status whatsapp 30 second(360P).mp4'
import ZHVideos from '../../../componnents/ZH_Videos/ZHVideos'
import { Link } from 'react-router-dom'
import PaginateItems from '../../../componnents/paginateItems/PaginateItems'
import RestaurantGAPI from '../../../Api/Gallery/RestaurantGApi'
import { useState } from 'react'

const RestaurantGallery = () => {

    const [start, setstart] = useState(0)
    const [end, setend] = useState(14)

    const handelNextclick = () => {
        setstart(start + 14)
        setend(end + 14)
    }

    const handelPrevclick = () => {
        setstart(start - 14)
        setend(end - 14)
    }

    return (
        <>
            <div className='zh-gallery-dashboard-content'>
                <div className='zh-gallery-title '>
                    <p className='zh-gl-title-p'>Images</p>
                    <div className='HJ_link_gallery '>
                        <img src={gallery_add} alt='add' />
                        <Link>Add New Images</Link>
                    </div>
                </div>
                <div>
                    <RestaurantGAPI
                        start={start}
                        end={end}
                    />
                </div>
                <div className='PAgenatGallery'>
                    <button
                        onClick={() => handelPrevclick()}
                        className={start == 0 ? 'DisActiv' : ''}
                    >P</button>
                    <button>{end / 14}</button>
                    <button>{(end / 14) + 1}</button>
                    <button>{(end / 14) + 2}</button>
                    <button
                        onClick={() => handelNextclick()}
                        className={end == 120 ? 'DisActiv' : ''}
                    >N</button>
                </div>
            </div>

            <div className='zh-section2-gl-dashboard2 zh-gallery-dashboard-content'>
                <div className='zh-gallery-title'>
                    <p className='zh-gl-title-p'>Videos</p>
                    <div className='HJ_link_gallery '>
                        <img src={gallery_add} alt="gallery add" />
                        <Link>Add New Videos</Link>
                    </div>
                </div>
                < div className='zh-gallery-dashboard2'>
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
                </div>
                <PaginateItems />
            </div>

        </>

    )
}

export default RestaurantGallery








