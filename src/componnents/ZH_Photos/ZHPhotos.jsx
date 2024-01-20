import './ZH_Photos.css'
const ZHPhotos = (props) => {
    return (
        <>
        <div className='zh-gl-3'>
                <img className='img1' src={props.img11} alt='image gallery'/>
                <img className='img2' src={props.img12} alt='image gallery'/>
                <img className='img3' src={props.img13} alt='image gallery'/>
            </div>
            
            <div className='zh-gl-4'>
                <img className='img1' src={props.img21} alt='image gallery'/>
                <img className='img2' src={props.img22} alt='image gallery'/>
                <img className='img3' src={props.img23} alt='image gallery'/>
                <img className='img4' src={props.img24} alt='image gallery'/>
            </div>
        </>
    )
}

export default ZHPhotos




