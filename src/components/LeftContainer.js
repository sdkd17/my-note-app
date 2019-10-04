import React,{Component} from 'react';
import HeaderLeft from './HeaderLeft';
import BodyLeft from './BodyLeft';


class LeftContainer extends Component {

	render(){
		let notes = this.props.notes;
		return(
			<div className={this.props.className}>
				<HeaderLeft NewNote={this.props.handleNewNote}
										handleSearch={this.props.handleSearch}/>
			 	<BodyLeft notes={notes}
			 						selected={this.props.sel}
			 						handleSelectNote={i => this.props.selectNote(i)}/>
			</div>
		);
	}

	
}

export default LeftContainer;