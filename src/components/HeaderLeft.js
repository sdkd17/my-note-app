import React,{Component} from 'react';


class HeaderLeft extends Component {

	render(){
		return(
			<div className="header">
				
				<div className="flex-item">		  
		  		<button title			="Show SideBar"
		  						onClick={this.props.showSidebar} > 
		  			<span className={this.props.sideBar?"fas fa-angle-double-left":"fas fa-angle-double-right"}> </span>
		  		</button> 
		  		
		  		<button title="New Note" 
		  						onClick={this.props.NewNote}> 
		  			<span className="fas fa-plus">  </span> 
		  		</button> 
		 		</div>

				
				
				<div className="flex-item">
		    	<input type="text" placeholder="Search" onChange={this.props.handleSearch} />
				</div>
				
			</div>
		);
	}
}

export default HeaderLeft;