import "react";
import "../css/index.css";
import Materias from "../components/materias.js";
import Faltas from "../components/faltas.js";
import Calendario from "../components/calendario.js";
import Desistencia from "../components/desistencia.js";
import Usuario from "../components/usuario.js";

export default function Index() {
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <Materias/>
            <Faltas/>
            <Calendario/>
            <Desistencia/><br/>
            <Usuario />
        </div>
    )
}