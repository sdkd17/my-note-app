import React,{Component} from 'react';
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'


class Container extends Component {

	constructor(props){
		super(props);

		this.state = {
			notes: [],
			selected: -1,
			hideLeft: false,
		};
		
		this.currentContent = "";


    // this.handleNewNote = this.handleNewNote.bind(this);
    // this.handleChangeSelection = this.handleChangeSelection.bind(this);
	}

	render(){
		
		let note = {title: "New note", content: ""}
		if (this.state.selected >= 0) {
			note = this.state.notes[this.state.selected];
		}

		let klassL = "container left";
		if (this.state.hideLeft){
			klassL =  klassL + " hide"
		}
		
		let klassR = "container"
		if (!this.state.hideLeft){
			klassR = klassR + " right"
		}

		return(

			<div >
				<LeftContainer className={klassL} 
											notes={this.state.notes}
											sel={this.state.selected}
											handleNewNote={() => this.handleNewNote()}
											selectNote={(i) => this.handleChangeSelection(i)}
				/>
				<RightContainer className="container" 
												note={note}
												index={this.state.selected}
												updateNote={(index, content) => this.updateNote(index, content)}
												saveNote={() => this.saveNote()}
												hideLeftPanel={() => this.hideLeftPanel()}
				/>
			</div>
		);
	}

	handleNewNote(){
		let notes = this.state.notes.slice();
		notes.push({title:'new note ' + notes.length, content: 'new note ' + notes.length});
		
		this.setState({
			notes: notes,
			selected: notes.length-1,
		});
	}

	handleChangeSelection(i) {
		
		if (this.state.selected !== i) {
			let notes = this.state.notes.slice();
			notes[this.state.selected].content = this.currentContent;
			
			this.setState({
				notes: notes,
				selected: i,
			})
		}
	}

	updateNote(index, content){
		if (index >= 0){
			// console.log(content);	
			this.currentContent = content; 
		}
	}

	saveNote(){
		let notes = this.state.notes.slice();
		notes[this.state.selected].content = this.currentContent;
			
			this.setState({
				notes: notes,
			})
	}

	hideLeftPanel(){
		const hideL = this.state.hideLeft;
		this.setState({
			hideLeft: !hideL,
		})
	}

}

export default Container;