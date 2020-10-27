import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Button from './../components/Button';
import Background from './../components/Background';
import Screen from './../components/Screen';
import { StartConst } from './../constants/StartConst';

const StartScreen = () => {
    return ( 
        <Screen style={styles.container}>
            <Background />
            <View style={styles.info}>
                <Text style={styles.content}>{StartConst.content}</Text>
                <Button title="Start" />
                <Text>{StartConst.contentService}</Text>
                <View>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text>{StartConst.service}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text>{StartConst.service}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
        padding:50,
    },
    content: {
        fontSize: 19
    }
})
 
export default StartScreen;