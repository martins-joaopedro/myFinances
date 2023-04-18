import React, { useState, useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'
import { Home } from './src/components/Home'

const App = () => {
  return(
    <SafeAreaView style={{paddingTop: Constants.statusBarHeight}}>
       <Home />
    </SafeAreaView>
  )
}
 

export default App;
