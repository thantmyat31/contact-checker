import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const HeaderBar = () => {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.goBack();
    }
	return (
		<View
			style={styles.headerBar}
		>
            <TouchableWithoutFeedback onPress={handleOnPress}>
                <Text style={styles.icon}>&#8592;</Text>
            </TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
    headerBar: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999
    },
    icon: {
        color: '#fff',
        fontSize: 30,
        width:30
    }
})

export default HeaderBar;
