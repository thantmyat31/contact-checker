/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';
import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import ContactNavigator from './app/navigation/ContactNavigator';

import ContactsList from './app/components/ContactsList';
import useFCMServices from './app/hooks/firebase/useFCMServices';

const App = () => {
  useFCMServices();

  return (
    <>
      {/*<NavigationContainer>
        <ContactNavigator />
      </NavigationContainer>*/}
      <ContactsList />
    </>
  );
};


export default App;
