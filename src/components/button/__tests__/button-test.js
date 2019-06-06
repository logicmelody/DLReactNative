import React from 'react';
import Button from '../index';

import renderer from 'react-test-renderer';

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
			test('should call onPress', () => {
				// Arrange
				// 1. mock function
				const mockOnPress = jest.fn();

				// 2. passing in mock function as props
				const component = renderer.create(
					<Button
						label="test label"
						onPress={mockOnPress}
					/>
				);

				// 3. getting an instance of component
				const instance = component.getInstance();

				// Act
				// 4. manually triggering onPressHandler()
				instance.onPressHandler();

				// Assert
				expect(mockOnPress).toHaveBeenCalled();

				// 5. checking return values
				expect(mockOnPress).toHaveBeenCalledTimes(1);
			});
		});
	});
});
