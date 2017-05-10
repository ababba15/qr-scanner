import { StackNavigator } from 'react-navigation';
import CaptureScreen from './CaptureScreen';
import ResultScreen from './ResultScreen';

export default StackNavigator({
  CaptureScreen: { screen: CaptureScreen },
  ResultScreen: { screen: ResultScreen },
}, {
    initialRouteName: "CaptureScreen",
});