import './PostCss.css'

const Post =(props) =>{

    
    return(
        <>
          <div id="BloqueProducto"> 
            <img className='imgZapatilla' src={props.imagen}/>
            <h3 className="text1">{props.descripcion}</h3>
            <h3 className="text2">{props.marca}</h3>
            <p className="text3">{props.precio}</p>
            </div>  
        </>
    )
}


export default Post