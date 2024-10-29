import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Testimonio from "./Testimonio.js";

const TestimonioList = () =>{

    const { testimonios } = useContext(GlobalContext);

    return (
        <>
            {testimonios.map( (alumnos) => (
                <Testimonio key={alumnos.id} nombre={alumnos.nombre} pais={alumnos.pais} imagen={alumnos.imagen} cargo={alumnos.cargo} empresa={alumnos.empresa} testimonio={alumnos.testimonio} />
            ) )}
        </>
    );
}

export default TestimonioList