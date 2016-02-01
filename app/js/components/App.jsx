import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import Editor from './Editor.jsx';
import Menu from './Menu.jsx';
import Bubble from './Bubble.jsx';
import '../../css/main.css';

const store = configureStore();

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
