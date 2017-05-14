import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCJzjejPh49pEAZR9vDYNJJ-6-I1A849-s",
      authDomain: "vuebooklist.firebaseapp.com",
      databaseURL: "https://vuebooklist.firebaseio.com",
      projectId: "vuebooklist",
      storageBucket: "vuebooklist.appspot.com",
      messagingSenderId: "342741327867"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
