import '../style/clone.css';

function Clone (){
  return(
    <div className='clone'>
      <img
        className = 'imagen'
        src={require('C:/Users/Aaron/Desktop/proyecto/clone/src/imagenes/fotoShawn.png')}
        alt='foto'/>
         <div className='contenedorTexto'>
        <p className = 'nombre'>Shawn Wang en Singapur</p>
        <p className = 'cargo'>Ingeniero de Software en Amazon</p>
        <p className = 'texto'>"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar 
          trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año 
          tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."</p>
    </div>
    </div>  
  )
}

export default Clone;

