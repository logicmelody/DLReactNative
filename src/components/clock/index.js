import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		console.log('Clock render');

		return (
			<View>
				<Text>Hello, world!</Text>
				<Text>It is {this.state.date.toLocaleTimeString()}.</Text>
			</View>
		);
	}
}

export default Clock;
