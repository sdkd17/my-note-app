import React,{Component} from 'react';
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'


class Container extends Component {

	constructor(props){
		super(props);

		this.state = {
			notes: [],
			filter: false,
			filtered: [],
			selected: -1,
			hideLeft: false,
			deleted: [], 
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

		
		let klassR = "container right";
		if (this.state.hideLeft){
			klassR = "container full-width";
		}
		let notes = [];
		if (!this.state.filter) {
			notes = this.state.notes;
		}else{
			notes = this.state.filtered;
		}
		 
		
		let leftContainer;
		if (!this.state.hideLeft) {
			leftContainer = <LeftContainer className="container left" 
				notes={notes}
				sel={this.state.selected}				
				handleNewNote={() => this.handleNewNote()}
				selectNote={(i) => this.handleChangeSelection(i)}
				handleSearch={(e) => this.handleSearch(e)}
			/>
		} 

		return(

			<div >
				
				{leftContainer}

				<RightContainer className={klassR} 
												note={note}
												index={this.state.selected}
												updateNote={(index, content) => this.updateNote(index, content)}
												saveNote={() => this.saveNote()}
												hideLeft = {this.state.hideLeft}
												hideLeftPanel={() => this.hideLeftPanel()}
												deleteNote={() => this.deleteNote()}
				/>
			</div>
		);
	}

	handleNewNote(){
		let notes = this.state.notes.slice();
		notes.push({title:'new note...', content: ''});
		
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
			this.currentContent = content; 
		}
	}

	saveNote(){
		let notes = this.state.notes.slice();
		notes[this.state.selected].content = this.currentContent;		
		notes[this.state.selected].title = /[^\n]*/.exec(this.currentContent)[0];	

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

	handleSearch(e){

		let value = e.target.value;
		let filtered = [];
		if (value !== "") {
			let notes = this.state.notes.slice();
			filtered = notes.filter(note => note.content.includes(value));

			this.setState({
				filter: true,
				filtered: filtered,
			})
		}else{
			this.setState({
				filter: false,
				
			})
		}
	}

	deleteNote(){
		let notes = this.state.notes.slice();
		let deleted = this.state.deleted.slice();
		let selected = this.state.selected;

		let deletedNote = notes[selected];
		deleted.push(deletedNote);
		let notesSpliced = notes.splice(selected,1);
		

		this.setState({
			notes: notes,
			selected: selected-1,
			deleted: deleted,
		});
	}

}

export default Container;