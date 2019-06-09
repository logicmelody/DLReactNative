import {
	Platform,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import ScreenCatalog from './screens/screen-catalog';
import reducers from './reducers';
import registerScreens from './register-screens';

const tabs = [
	{
		label: '1',
		screen: ScreenCatalog.FIRST_SCREEN, // this is a registered name for a screen
		icon: require('./img/first.png'),
		selectedIcon: require('./img/first-selected.png'), // iOS only
		title: 'Screen 1',
	},
	{
		label: '2',
		screen: ScreenCatalog.SECOND_SCREEN,
		icon: require('./img/second.png'),
		selectedIcon: require('./img/second-selected.png'), // iOS only
		title: 'Screen 2',
	}
];

const tabsStyle = {
	tabBarButtonColor: 'white',
	tabBarSelectedButtonColor: '#ffa200',
	tabBarBackgroundColor: '#551A8B',
	forceTitlesDisplay: true,
};

const appStyle = {
	tabBarButtonColor: 'white',
	tabBarSelectedButtonColor: '#ffa200',
	tabBarBackgroundColor: '#551A8B',
	forceTitlesDisplay: true,
};

const store = createStore(reducers, {});

registerScreens(store, Provider);
startApp();

function startApp() {
	const attributes = Platform.OS === "ios" ?
		{
			tabs,
			tabsStyle,
		} :
		{
			tabs,
			appStyle,
		};

	Navigation.startTabBasedApp(attributes);
}
