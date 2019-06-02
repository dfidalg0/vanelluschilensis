import {Component} from "react";

class Materias extends Component {
	constructor(props){
		super(props);
		this.abre = this.abre.bind(this);
	}

	abre( ){
		var x = document.getElementById("subjects");
  		if (x.style.display === "none") {
    		x.style.display = "block";
  		} else {
    		x.style.display = "none";
  		}
	}

    render (){
        return (
        	<div>
	            <button onClick={this.abre}><h1>Matérias</h1></button>
	            <div id="subjects">
	            	<li> Matemática </li>
	            	<li> Física </li>
	            	<li> Química </li>
	            </div>
	        </div>
        );
    }
}
export default Materias;