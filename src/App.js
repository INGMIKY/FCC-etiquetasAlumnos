import './App.css'
// import Testimonio from './components/Testimonio/Testimonio.js'
import GlobalContextProvider from './context/GlobalContext.jsx';
import TestimonioList from './components/Testimonio/TestimonioList.js';



function App() {
  return (
    <GlobalContextProvider>
      <div className='App'>
        <div className='contenedorApp'>
          <h1>Esto es lo que dicen nuestros alumnos de freecodecamp</h1>
          {/* <Testimonio nombre='Shawn Wang' pais='Singapore' imagen='shawn' cargo='Ingeniero de software' empresa='Amazon' testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'/>
          <Testimonio nombre='Sarah Chima' pais='Nigeria' imagen='sarah' cargo='Ingeniera de software' empresa='ChatDesk' testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'/>
          <Testimonio nombre="Emma Bostian" pais="Suecia" imagen='emma' cargo='Ingeniera en softwate' empresa='Spotify' testimonio='Siempre me costó aprender JavaScript. Hice muchos cursos, pero el de freeCodeCamp fue el que me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp, me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'/> */}
           <TestimonioList />         
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
