/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ContactNavigator from './app/navigation/ContactNavigator';

import useFCMServices from './app/hooks/firebase/useFCMServices';
import ContactCheckerNavigator from './app/navigation/ContactCheckerNavigator';

const App = () => {
  useFCMServices();

  return (
    <>
      <NavigationContainer>
        <ContactCheckerNavigator />
      </NavigationContainer>
    </>
  );
};


export default App;
