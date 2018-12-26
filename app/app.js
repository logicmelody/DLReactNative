import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Divider from "ljit-rn-components/divider";

import Clock from './components/clock';

class App extends Component {
	render() {
		console.log('App render');

		return (
			<View style={styles.container}>
				<Clock />

				<Text>
					13
				</Text>

				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
				<Divider />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default App;