import { Stats } from './src/pages/Stats'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Constants from 'expo-constants'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <Stats></Stats>
    </GestureHandlerRootView>
  );
}
