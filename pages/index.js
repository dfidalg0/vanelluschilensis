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
            <Materias/>
            <Faltas/>
            <Calendario/>
            <Desistencia/><br/>
            <Usuario />
        </div>
    )
}