
const Postdetalle =({imagen, descripcion, marca, precio}) =>{
    
    return (
        <>
            <img src={imagen}/>
            <h3>{descripcion}</h3>
            <h3>{marca}</h3>
            <p>{precio}</p>
        </>
    )
}

export default Postdetalle