import {Component} from "react";
import { ReactAgenda , ReactAgendaCtrl , guid ,  Modal } from 'react-agenda';



class Agenda extends Component {
  constructor(props){
super(props);
 this.state = {
   items:items,
   selected:[],
   cellHeight:30,
   showModal:false,
   locale:"fr",
   rowsPerHour:2,
   numberOfDays:4,
   startDate: new Date()
 }
 this.handleCellSelection = this.handleCellSelection.bind(this)
 this.handleItemEdit = this.handleItemEdit.bind(this)
 this.handleRangeSelection = this.handleRangeSelection.bind(this)
}

handleCellSelection(item){
console.log('handleCellSelection',item)
}
handleItemEdit(item){
console.log('handleItemEdit', item)
}
handleRangeSelection(item){
console.log('handleRangeSelection', item)
}
render() {
 return (
   <div>
     <ReactAgenda
       minDate={now}
       maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
       disablePrevButton={false}
       startDate={this.state.startDate}
       cellHeight={this.state.cellHeight}
       locale={this.state.locale}
       items={this.state.items}
       numberOfDays={this.state.numberOfDays}
       rowsPerHour={this.state.rowsPerHour}
       itemColors={colors}
       autoScale={false}
       fixedHeader={true}
       onItemEdit={this.handleItemEdit.bind(this)}
       onCellSelect={this.handleCellSelection.bind(this)}
       onRangeSelection={this.handleRangeSelection.bind(this)}/>
   </div>
 );
}
}
export default Agenda;
