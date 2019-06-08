import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class SecondScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					2
				</Text>
			</View>
		);
	}
}

SecondScreen.propTypes = {

};

SecondScreen.defaultProps = {

};

const mapStateToProps = state => {
	return {
	};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
