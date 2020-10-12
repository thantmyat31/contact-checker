import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetailsScreen = () => {
    return ( 
        <View style={styles.screen}>
            <Text>Details</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
 
export default ContactDetailsScreen;