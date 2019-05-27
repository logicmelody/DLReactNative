import React, { Component } from 'react';
import {
	Text,
	View,
} from 'react-native';

import styles from "./styles";

class Intro extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>

				<Text style={styles.instructions}>
					This is a React Native snapshot test.
				</Text>
			</View>
		);
	}
}

export default Intro;
