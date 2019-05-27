import React from 'react';
import Intro from '../index';

import renderer from 'react-test-renderer';

test('Intro renders correctly', () => {
	const tree = renderer.create(<Intro />).toJSON();

	expect(tree).toMatchSnapshot();
});
