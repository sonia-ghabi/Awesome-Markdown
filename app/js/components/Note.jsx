import React from 'react';

class Note extends React.Component {
	render() {
		const {date, content} = this.props;
		// TODO : parcourir jusqu'à la 1ere ligne non vide
		let preview = content.split("\n")[0];
		let localDate = new Intl.DateTimeFormat().format(new Date(date));
		return (
			<li>
				{preview}
				<br/>
				{localDate}
			</li>
		);
	}
}