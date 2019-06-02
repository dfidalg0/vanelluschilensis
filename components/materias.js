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
	            <button  type="button" class="btn btn-success" onClick={this.abre}>Matérias</button>
	            <div id="subjects">

	            	<li><button type="button" class="btn btn-success">Matemática</button></li>
	            	<li><button type="button" class="btn btn-success">Física</button></li>
	            	<li><button type="button" class="btn btn-success">Química</button></li>
	            </div>
	        </div>
        );
    }
}
export default Materias;