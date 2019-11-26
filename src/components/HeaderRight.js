import React,{Component} from 'react';


class HeaderLeft extends Component {

	render(){
		return(
			<div className="header">
				<div className="flex-item">
					<button title="Hide Panel"
									onClick={this.props.hideLeftPanel}> 
						<span className={this.props.hideLeft? 
														"fas fa-angle-right" : "fas fa-angle-left" }>  
						</span>
					</button>
			  </div>
			 	<div className="flex-item">
					<button title="Save Note"
									onClick={this.props.saveNote}> <span className="fas fa-save"> </span> </button>
					<button title="Trash"> <span className="fas fa-trash"
									onClick= {this.props.deleteNote}> </span> </button>
					<button title="Info"> <span className="fas fa-info"> </span> </button>

				</div>
			</div>
		);
	}
}

export default HeaderLeft;