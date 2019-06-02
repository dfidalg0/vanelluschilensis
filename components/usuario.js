import "../css/styles.css"

class Usuario extends React.Component{
	render( ){
		return(
			<div class="profile">
				<img src="../static/250px-Vanellus_chilensis_BR_1.jpg" id="userpic"/>
				<h3><span id="profilename">Vanellus chilensis</span></h3>
			</div>
		);
	}
}

export default Usuario;