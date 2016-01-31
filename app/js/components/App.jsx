import React from 'react';
import { connect } from 'react-redux';
import Editor from './Editor.jsx';
import Menu from './Menu.jsx';
import Bubble from './Bubble.jsx';

class App extends React.Component {
	render() {
		return <div class="container"><Menu notes={notes} /><Editor /><Bubble /></div>
	}
}

function mapStoreStateToProps(state) {
	const {notes} = state;
	return { 
		notes
	};
}

export default connect(mapStoreStateToProps)(App);