import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { StartConst } from './../constants/StartConst';
import colors from './../config/colors';

const Background = () => {
    return ( 
        <View style={styles.container}>
            <Image style={styles.image} source={require('./../assets/images/device.png')} />
            <Text style={styles.title}>{StartConst.addCheck}</Text>
            <Image style={styles.clouds} source={require('./../assets/images/circle.png')} />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width:100,
        height: 100
    },
    title: {
        fontSize: 22,
        color: colors.white,
        paddingTop:5
    },
    clouds: {
        position: 'absolute',
        bottom: -80
        
    }
})
 
export default Background;