import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stats } from './src/pages/Stats'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { CenterChart } from './src/components/CenterChart';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <CenterChart />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
