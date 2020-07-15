import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {useState} from 'react';

export default function Menu(props) {
  const [stan, setStan] = useState("menu");

  const handleEvent = e => {
    const value = "game";
        setStan(value);
        if (typeof props.eventClick === 'function') {
          props.eventClick(value);
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Flappy Space
      </Text>
      <Image style={styles.logo} source={require('../assets/favicon.png')} />
      <TouchableOpacity name="game" onPress={ e => handleEvent(e) } style={styles.button}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
    button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 15,
    margin: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  }, 
});