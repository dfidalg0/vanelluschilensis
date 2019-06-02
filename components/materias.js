import {Component} from "react";

class Materias extends Component {
    render (){
        return (
            <div>
                <div class="btn-group">
                    <button type="button" class="btn btn-success">Matérias</button>
                    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Matemática</a>
                        <a class="dropdown-item" href="#">Física</a>
                        <a class="dropdown-item" href="#">Química</a>
                        <a class="dropdown-item" href="#">Português</a>
                        <a class="dropdown-item" href="#">Inglês</a>
                    </div>
                </div>
                <Dropdown as={ButtonGroup}>
  <Button variant="success">Split Button</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>
        );
    }
}
export default Materias;