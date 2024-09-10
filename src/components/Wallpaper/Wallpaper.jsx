import './WallCss.css'

const Wallpaper =(props) =>{
    return (
        <div id="WallID">
            <img className='Wallpaper' src={props.Wallpaper}/>
        </div>
    )
}

export default Wallpaper