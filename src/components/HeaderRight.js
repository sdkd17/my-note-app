import React,{Component} from 'react';


class HeaderLeft extends Component {

	render(){
		return(
			<div className="header">
				<div className="felx-item">
					<button onClick={this.props.hideLeftPanel}> FocusMode </button>
			  </div>
			 	<div className="felx-item">
					<button onClick={this.props.saveNote}> Save </button>
					<button > Trash </button>
				</div>
			</div>
		);
	}
}

export default HeaderLeft;