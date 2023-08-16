
import './App.css';
import Clone from './components/clone';


function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Clone
      nombre='Renato Romero'
      pais='Brasil'
      imagen='Renato'
      cargo='Técnico em Desenvolvimento de Sistemas'
      empresa='SENAC'
      testimonio='A programacão é minha pasão, desenvolver código é uma das atividades mais fascinantes 
      que já fiz, quanto mais aprendo, mais me surpreendo com o poder que as ferramentas digitais têm no 
      desenvolvimento do nosso mundo e em como transformamos nossas vidas.'/>
      <Clone
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='Shawn'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando 
      a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un 
      trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'/>
      <Clone
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='Sarah'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. 
      El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de 
      principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer 
      trabajo de desarrollador en una empresa increíble.'/>
       <Clone
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='Emma'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, 
      pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras
       de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba 
       para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
    </div>
    </div>
  );
}

export default App;
