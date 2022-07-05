import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Dashboard = (props) => {

    const { navigation } = props

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 80, marginHorizontal: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('MyFlock')}
                    style={styles.myfarm}>
                    <ImageBackground source={require('../../images/hen.png')}
                        style={{ height: 100, width: 70, alignSelf: 'center', marginTop: 30 }}>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.history}>
                    <ImageBackground source={require('../../images/history.png')}
                        style={{ height: 100, width: 70, alignSelf: 'center', marginTop: 30 }}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 3, marginHorizontal: 30 }}>
                <TouchableOpacity style={styles.storage}>
                    <ImageBackground source={require('../../images/storage.png')}
                        style={{ height: 100, width: 70, alignSelf: 'center', marginTop: 30 }}>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resources}>
                    <ImageBackground source={require('../../images/resources.png')}
                        style={{ height: 100, width: 70, alignSelf: 'center', marginTop: 30 }}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 65 }}>
                <View style={styles.conleft}>

                </View>


                <View style={styles.conright}>

                </View>
            </View>
            <View style={styles.middleline}>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        height: windowHeight,
        width: windowWidth,
    },

    conleft: {
        height: 250,
        width: 171,
        backgroundColor: '#f2392e',
        borderTopRightRadius: 20,
        marginRight: 20,
    },

    middleline: {
        backgroundColor: '#f2392e',
        height: 400,
        width: 8,
        marginLeft: 177,
        marginTop: 358,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        position: 'absolute',
    },

    conright: {
        height: 250,
        width: 170,
        backgroundColor: '#FE0000',
        borderTopLeftRadius: 20,
    },

    myfarm: {
        height: 150,
        width: 150,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginRight: 2,
    },
    history: {
        height: 150,
        width: 150,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    storage: {
        height: 150,
        width: 150,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginRight: 2,
    },
    resources: {
        height: 150,
        width: 150,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
})

export default Dashboard;