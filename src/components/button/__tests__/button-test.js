import React from 'react';
import Button from '../index';

import renderer from 'react-test-renderer';

const mockOpenURL = jest.fn();
const mockOnPress = jest.fn();

// 1. Set openURL module function to jest.fn
jest.mock('Linking', () => ({
	openURL: mockOpenURL,
}));

describe('Button', () => {
	describe('Rendering', () => {
		test('should match to snapshot - Primary', () => {
			const component = renderer.create(
				<Button
					label="test label"
				/>
			);

			expect(component).toMatchSnapshot();
		});

		test('should match to snapshot - Secondary', () => {
			const component = renderer.create(
				<Button
					label="test label"
					primary={false}
				/>
			);

			expect(component).toMatchSnapshot();
		});
	});

	describe('Interaction', () => {
		describe('onPressHandler', () => {
			let instance;

			beforeEach(() => {
				instance = renderer.create(
					<Button
						label="test label"
						onPress={mockOnPress}
						url="https://www.test.com"
					/>
				).getInstance();

				jest.clearAllMocks();
			});

			test('should call onPress', () => {
				instance.onPressHandler();

				expect(mockOnPress).toHaveBeenCalled();
				expect(mockOnPress).toHaveBeenCalledTimes(1);
			});

			test('should call openURL if url is provided', () => {
				instance.onPressHandler();

				expect(mockOpenURL).toHaveBeenCalled();
				expect(mockOpenURL).toHaveBeenCalledTimes(1);
				expect(mockOpenURL).toHaveBeenCalledWith('https://www.test.com');
			});

			test('should not call openURL if url is nor provided', () => {
				const innerInstance = renderer.create(
					<Button
						label="test label"
						onPress={mockOnPress}
					/>
				).getInstance();

				innerInstance.onPressHandler();

				expect(mockOpenURL).not.toHaveBeenCalled();
			});
		});
	});
});
