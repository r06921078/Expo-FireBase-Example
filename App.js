import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDinRUGF5bcmnE1rG_PoYsFovyAuVv3rdQ",
  authDomain: "my-test-project0414.firebaseapp.com",
  databaseURL: "https://my-test-project0414.firebaseio.com",
  projectId: "my-test-project0414",
  storageBucket: "my-test-project0414.appspot.com"

};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
