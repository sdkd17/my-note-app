import React,{Component} from 'react';


class BodyLeft extends Component {

	render(){
		let notes;
		if (this.props.notes.length === 0)
			notes = <p> No Notes </p>
		else {
			
			notes= this.props.notes.map( (note,i) => (
						<li key={i} 
								className= "list-item"
						> 

							<button onClick={() => this.props.handleSelectNote(i)}> 
								{	(this.props.selected === i) ? note.title + "selected" 
																							: note.title }  
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