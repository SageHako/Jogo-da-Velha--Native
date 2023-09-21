import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './src/components/header/Header';
import Game from './src/components/game/Game';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Game/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F4',
    alignItems: 'center',
  },
});
