/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NavigationContainer
} from 'react-native';
import 'react-native-gesture-handler';




import RegisterScreen from './src/screens/RegisterScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/ProfileScreen';
import Router from './src/screens/Navigations/Router';

const App = () => {
  return (
    <>
     <StatusBar barStyle="dark-content" backgroundColor="#C3E638"/>
     {/* <Profile/> */}
     <Router/>
    </>
  );
};



export default App;
