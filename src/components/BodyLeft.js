import React,{Component} from 'react';


class BodyLeft extends Component {

	render(){
		let notes;
		if (this.props.notes.length === 0)
			notes = <span> No Notes </span>
		else {
			
			notes= this.props.notes.map( (note,i) => (
						<li key={i} 
								className= "list-item"
						> 

							<button onClick={() => this.props.handleSelectNote(i)}
											className={(this.props.selected === i) ? "selected" 
																															: "unselected"} > 
							
								<span className={(this.props.selected === i) ? "selected" 
																															: "unselected"} > 
									{note.title} 
								</span> 
							</button> 
						</li>
					))
		}
		return(
			<div className="body">
				<ul className="note-list">
					{notes}
				</ul>
			</div>
		);
	}
}

export default BodyLeft;