import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsScreen from './../screens/contacts.screen';
import ContactDetailsScreen from './../screens/contactDetails.screen';

import colors from '../config/colors';

const Stack = createStackNavigator();

const ContactNavigator = () => {
    return ( 
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTintColor: colors.white
        }}>
            <Stack.Screen name="Contacts" component={ContactsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={{ title: 'Contact Details' }} />
        </Stack.Navigator>
    );
}
 
export default ContactNavigator;