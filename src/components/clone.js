import '../style/clone.css';

function Clone (props){
  return(
    <div className='clone'>
      <img
        className = 'imagen'
        src={require(`C:/Users/Aaron/Desktop/proyecto/clone/src/imagenes/foto${props.imagen}.png`)}
        alt='foto'/>
         <div className='contenedorTexto'>
        <p className = 'nombre'><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
        <p className = 'cargo'><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
        <p className = 'texto'>"{props.testimonio}"</p>
    </div>
    </div>  
  )
}

export default Clone;

