import React,{Component} from 'react';


class HeaderLeft extends Component {

	render(){
		return(
			<div className="header">
				 <button onClick={this.props.hideLeftPanel}> FocusMode </button>
				 <button onClick={this.props.saveNote}> Save </button>
				 <button > Trash </button>
			</div>
		);
	}
}

export default HeaderLeft;