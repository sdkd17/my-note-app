import React,{Component} from 'react';


class HeaderLeft extends Component {

	render(){
		return(
			<div className="header">
				
			  <button onClick={this.props.NewNote}> New Note </button> 
			 
				
		    <input type="text" placeholder="Search" onChange={this.props.handleSearch} />
				
				
			</div>
		);
	}
}

export default HeaderLeft;