import React,{Component} from 'react';
import MyEditor from './MyEditor';

class BodyRight extends Component {

	

	render(){

		return(
			<div className="body">
				<MyEditor content={this.props.noteBody.content}
									index={this.props.index}
									updateNote={this.props.updateNote}
				/>
			</div>
		);
	}
}

export default BodyRight;