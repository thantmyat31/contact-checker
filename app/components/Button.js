import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from './../config/colors';

const Button = ({ title, onPress, style }) => {
    return ( 
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Text style={[styles.button, style]}>{title}</Text>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.danger,
        color: colors.white,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical:7,
        fontSize:14,
        textTransform: 'uppercase',
        borderRadius: 3,
        elevation: 3
    }
})
 
export default Button;