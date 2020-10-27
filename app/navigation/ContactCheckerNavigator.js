import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './../screens/Start.screen';
import ContactCheckerScreen from './../screens/ContactChecker.screen';

const Stack = createStackNavigator();

const ContactCheckerNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ 
            headerShown: false
         }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="ContactChecker" component={ContactCheckerScreen} />
        </Stack.Navigator>
    )
}

export default ContactCheckerNavigator;