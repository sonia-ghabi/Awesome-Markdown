import React from 'react';
import note from "./Note.jsx";

class Menu extends React.Component {

	getInitialState() {
		return {
			notesList: this.props.notes,
		};
	}

	render() {
		const {notesList} = this.state;
		let notesItems = [];
		if(notesList) {
			for(let note of notesList) {
				notesItems.push(<note key={note.id} data={note} />);
			}
		}

		return (
			<ul className="menu">
				{notesList}
			</ul>
		);
	}
}

export default Menu