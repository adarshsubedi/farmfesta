import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyFlock = (props) => {

    const { navigation } = props

    return (
        <View style={styles.container}>
            <View style={{ height: 70, width: windowWidth, justifyContent: 'center', backgroundColor: '#FFFFFF', borderBottomLeftRadius: 40 }}>
                <TouchableOpacity onPress={() => (navigation.navigate('Dashboard'))}>
                    <Icon name='arrow-back-circle' size={30}
                        style={{
                            color: 'red',
                            marginLeft: 20,
                        }}>
                    </Icon>
                </TouchableOpacity>

                <Image source={require('../../images/hen1.png')}
                    style={{ height: 25, width: 25, marginLeft: 130, marginTop: 30, position: 'absolute' }} />

                <Text style={{ marginLeft: 170, position: 'absolute', fontSize: 15, fontWeight: 'bold', color: 'red' }}>
                    My Flock
                </Text>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('CreateNewFlock')} style={styles.add}>
                    <Icon name='add-circle' size={65}
                        style={{
                            color: 'red',
                            marginLeft: 20,
                        }}>
                    </Icon>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    add: {
        alignItems: 'flex-end',
        marginTop: 580,
        marginHorizontal: 15,
    },
})

export default MyFlock;