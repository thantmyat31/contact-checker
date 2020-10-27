import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ContactCheckerScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>Contact Checker Screen</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default ContactCheckerScreen;