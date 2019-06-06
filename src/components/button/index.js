import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	TouchableOpacity,
	Linking,
} from 'react-native';

import styles from './styles';

// 1. Changed to a class based component
class Button extends Component {
	// 2. Custom function called onPress TouchableOpacity
	onPressHandler = () => {
		const { onPress, url } = this.props;

		if (url) {
			Linking.openURL(url);
		}

		onPress();
	}

	render() {
		const { buttonStyle, textStyle } = styles;
		const { label, primary } = this.props;

		// 3. Change color of button depending on 'primary' prop
		const newButtonStyle = primary ?
			buttonStyle : [buttonStyle, { backgroundColor: '#f34541', borderBottomColor: '#a43532' }];

		return (
			<TouchableOpacity
				onPress={this.onPressHandler}
				style={newButtonStyle}
			>
				<Text style={textStyle}>
					{label}
				</Text>
			</TouchableOpacity>
		);
	}
};

Button.propTypes = {
	label: PropTypes.string,
	url: PropTypes.string,
	primary: PropTypes.bool,
	onPress: PropTypes.func,
};

Button.defaultProps = {
	label: "",
	primary: true,
	onPress: () => {},
};

export default Button;
