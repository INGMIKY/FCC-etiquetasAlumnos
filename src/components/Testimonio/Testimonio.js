import React from "react";
import "./Testimonio.css"



const Testimonio = ({nombre,pais,imagen,cargo,empresa,testimonio}) => {

    // Mapeo de los datos que queremos modificar, palabra clave o nombre de la propiedad: valor
    const frasesEnNegritas= {
        "Shawn Wang": "freeCodeCamp cambió mi vida.",
        "Sarah Chima": "freeCodeCamp fue la puerta de entrada a mi carrera",
        "Emma Bostian": "freeCodeCamp me dio las habilidades"
    }

    // accedemos al alumno con las coincidencias del props.nombre del objeto y se utiliza [] y modificamos su frase, 
    //en realidad es cokmo si agregaramos un elemento más al objeto
    const frase = frasesEnNegritas[nombre]
    // uso del metodo split para divir la frase para colocar 2 partes el antes y despues de las negritas
    const partes = testimonio.split(frase)

    

    return (
        <div className="testimonioContenedor">
            <img className="testimonioImagen" src={`../img/testimonio-${imagen}.png`} alt={`Foto de ${nombre}`} />
            <div className="testimonioBiografia">
                <p className="testimonioNombre"><strong>{nombre} </strong>en {pais}</p>
                <p className="testimonioCargo">{cargo} en <strong>{empresa}</strong></p>
                <p className="testimonioTexto">"{partes[0]}<strong>{frase}</strong>{partes[1]}"</p>
            </div>

        </div>
    );
}

export default Testimonio; 