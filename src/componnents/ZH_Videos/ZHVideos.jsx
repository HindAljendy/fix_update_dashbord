import './ZH_Videos.css'

const ZHVideos = (props) => {
    return (
        <>
            <div className='zh-gl-3'>
                <video className='video1' src={props.video11} poster={props.poster11} controls />
                <video className='video2' src={props.video12} poster={props.poster12}  controls/>
                <video className='video3' src={props.video13}  poster={props.poster13} controls/>
            </div>
            
            <div className='zh-gl-4'>
                <video className='video1' src={props.video21} poster={props.poster21} controls/>
                <video className='video2' src={props.video22} poster={props.poster22} controls/>
                <video className='video3' src={props.video23} poster={props.poster23} controls/>
                <video className='video4' src={props.video24} poster={props.poster24} controls/>
            </div>
    </>
    )
}

export default ZHVideos


