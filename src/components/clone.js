import '../style/clone.css';

function Clone (props){
  return(
    <div className='clone'>
      <img
        className = 'imagen'
        src={require(`C:/Users/Aaron/Desktop/proyecto/clone/src/imagenes/foto${props.imagen}.png`)}
        alt='foto'/>
         <div className='contenedorTexto'>
        <p className = 'nombre'>{props.nombre} en {props.pais}</p>
        <p className = 'cargo'>{props.cargo} en {props.empresa}</p>
        <p className = 'texto'>"{props.testimonio}"</p>
    </div>
    </div>  
  )
}

export default Clone;

