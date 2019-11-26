import React,{Component} from 'react';
import HeaderRight from './HeaderRight';
import BodyRight from './BodyRight';


class RightContainer extends Component {

	render(){
		
		return(
			<div className={this.props.className}>
				<HeaderRight 	saveNote={this.props.saveNote}
											hideLeft= {this.props.hideLeft}
											hideLeftPanel={this.props.hideLeftPanel}
											deleteNote={this.props.deleteNote}
				/>
			 	<BodyRight 	noteBody={this.props.note}
			 							index={this.props.index}
		 							 	updateNote={this.props.updateNote}
			 	/>
			</div>
		);
	}
}

export default RightContainer;