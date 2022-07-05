import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 4000);
    })


    const { navigation } = props
    return (
        <View style={styles.container}>
            <Image source={require('../../images/farmer1.png')}
                style={{ height: 250, width: 250, alignSelf: 'center', marginTop: 210, marginLeft: 30 }}
            />
            <Text style={{ fontSize: 50, color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
                Farm Festa
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'white',
    },
})

export default SplashScreen;