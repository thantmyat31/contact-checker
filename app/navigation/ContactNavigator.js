import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsScreen from './../screens/contacts.screen';
import ContactDetailsScreen from './../screens/contactDetails.screen';

const Stack = createStackNavigator();

const ContactNavigator = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={ContactsScreen} />
            <Stack.Screen name="ContactsDetails" component={ContactDetailsScreen} />
        </Stack.Navigator>
    );
}
 
export default ContactNavigator;