import React,{Component} from 'react';


class HeaderLeft extends Component {

	render(){
		return(
			<div className="header">
				<button onClick={this.props.NewNote}> New Note </button>
			</div>
		);
	}
}

export default HeaderLeft;