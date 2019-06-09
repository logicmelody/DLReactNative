import { Navigation } from 'react-native-navigation';

import ScreenCatalog from './screens/screen-catalog';

import FirstScreen from './screens/first-screen';
import SecondScreen from './screens/second-screen';

const registerScreens = (store, Provider) => {
	Navigation.registerComponent(ScreenCatalog.FIRST_SCREEN, () => FirstScreen, store, Provider);
	Navigation.registerComponent(ScreenCatalog.SECOND_SCREEN, () => SecondScreen, store, Provider);
}

export default registerScreens;
