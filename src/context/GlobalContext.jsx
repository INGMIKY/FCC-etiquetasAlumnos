import { createContext } from "react";
import { useState } from "react";

// Creamos el contexto
export const GlobalContext = createContext();

// Creamos el componente que va compartir los estados a los demas componentes
const GlobalContextProvider = ({children}) =>{

    const [testimonios, setTestimonios] = useState([{
        id:1,
        nombre:'Shawn Wang',
        pais:'Singapore',
        imagen:'shawn',
        cargo:'Ingeniero de software',
        empresa:'Amazon',
        testimonio:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        },
        {
        id:2,
        nombre:'Sarah Chima',
        pais:'Nigeria',
        imagen:'sarah',
        cargo:'Ingeniera de software',
        empresa:'ChatDesk',
        testimonio:'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        },
        {
        id:3,
        nombre:'Emma Bostian',
        pais:'Suecia',
        imagen:'emma',
        cargo:'Ingeniera de software',
        empresa:'Spotify',
        testimonio:'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        }]);

    return (
        <GlobalContext.Provider value={{testimonios}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider