import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

// You can import from local files
import Menu from './components/Menu';
import Game from './components/Game';

// or any pure javascript modules available in npm

export default function App() {
  const [stan, setStan] = useState("menu");

  const handleChange = e => {
    setStan(e);
  }

  return (
    <View style={styles.container}>
    {stan == "menu" && <Menu eventClick={handleChange}/>}
    {stan == "game" && <Game/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});