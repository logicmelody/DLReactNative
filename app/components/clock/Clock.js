import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Clock extends Component {
	render() {
		return (
			<Text style={styles.welcome}>This is a clock</Text>
		);
	}
}

export default Clock;