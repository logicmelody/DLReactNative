import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import styles from "./styles";

import reducers from './reducers';

import Clock from './components/clock';

const store = createStore(reducers, {});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Clock />
				</View>
			</Provider>
		);
	}
}

export default App;
