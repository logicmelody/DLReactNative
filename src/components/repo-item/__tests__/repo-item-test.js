import React from 'react';
import RepoItem from '../index';

import renderer from 'react-test-renderer';

const repos = [
	{
		description: 'Useful description goes here.',
		id: 1,
		name: 'Test 1',
		stargazers_count: 50000,
	},
	{
		description: 'Useful description goes here.',
		name: 'Test 2',
		id: 2,
		stargazers_count: 10000,
	},
	{
		description: 'Useful description goes here.',
		name: 'Test 3',
		id: 3,
		stargazers_count: 499,
	},
];

test('RepoItem renders correctly, isSelected = false', () => {
	expect(renderer.create(
		<RepoItem
			repo={repos[0]}
			selectRepo={jest.fn}
		/>
	)).toMatchSnapshot();
});

test('RepoItem renders correctly, isSelected = true', () => {
	expect(renderer.create(
		<RepoItem
			isSelected
			repo={repos[0]}
			selectRepo={jest.fn}
		/>
	)).toMatchSnapshot();
});
