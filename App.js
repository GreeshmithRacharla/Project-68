import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Facebook from ".screens/fb.js";
import Instagram from ".screens/in.js";

export default function App() {
  return (
    <View style={styles.container}>
      
      <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen: Facebook},
  Instagram : {screen: Instagram}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
