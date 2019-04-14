import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Clock from './components/clock';

const store = createStore(reducers, {});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Clock />
			</Provider>
		);
	}
}

export default App;
