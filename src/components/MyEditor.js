import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Editor, EditorState, ContentState} from 'draft-js';

class MyEditor extends Component {

	constructor(props){
		super(props);
		this.state = {
			// editorState: EditorState.createWithContent(
			// 	ContentState.createFromText(this.props.content)),
			editorState: EditorState.createEmpty(),
		};
		this.onChange = (editorState) => this.setState({editorState});
	}

	// componentDidMount(){
	// 	console.log("componentDidMount");
	// 	console.log (this.props.content);
	// 	const newState = EditorState.createWithContent(ContentState.createFromText(this.props.content));
	// 	this.setState({
	// 		editorState: newState,
	// 	});
	// }

	componentWillReceiveProps(nextProps){
		const newState = EditorState.createWithContent(
												ContentState.createFromText(nextProps.content));
		const currentContent = this.state.editorState.getCurrentContent().getPlainText();
		if(nextProps.content !== currentContent){
			this.setState({
				editorState: newState,
			})
		}
	}

	componentDidUpdate(prevProps){
		// console.log(prevProps.index);
		// console.log(currentContent);

		const currentContent = this.state.editorState.getCurrentContent().getPlainText();
		prevProps.updateNote(prevProps.index, currentContent);
	}

	render(){
		
		// console.log(this.state.editorState.getCurrentContent().getPlainText());

		return(
			<Editor editorState={this.state.editorState} 
							onChange={this.onChange}
			/>
		);
	}


}

export default MyEditor;