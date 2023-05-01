import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stats } from './src/pages/Stats';

export default function App() {
  return (
    <View style={styles.container}>
      <Stats />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
