import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMap from 'react-native-vector-icons/Feather';
import IconCall from 'react-native-vector-icons/Ionicons';
import IconPen from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', height: 250, backgroundColor: '#FEB700', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Icon name='chevron-back-sharp' size={30}
                        style={{
                            color: 'black',
                            marginTop: 10,
                        }}>
                    </Icon>
                </TouchableOpacity>

                <Text style={{ marginLeft: 120, fontSize: 18, marginTop: 15, fontWeight: '600' }}>
                    My Profile
                </Text>
            </View>

            <Image source={require('../../images/userimage.png')}
                style={{ height: 135, width: 135, alignSelf: 'center', position: 'absolute', marginTop: 170 }}
            />
            <View style={{ backgroundColor: '#FEB700', borderRadius: 25, height: 45, width: 45, position: 'absolute', marginTop: 250, marginLeft: 210 }}>
                <IconPen name='pencil' size={30}
                    style={{
                        color: 'white',
                        marginTop: 7,
                        marginLeft: 10,
                    }}>
                </IconPen>
            </View>

            <View style={{ marginTop: 70 }}>
                <Text style={{ fontWeight: '900', color: 'black', textAlign: 'center', fontSize: 18 }}>
                    Govinda Lal Poudel
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 14, marginBottom: 25 }}>
                    Farm User
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 15 }}>
                <View style={{ height: 80, width: 160, borderRadius: 15, backgroundColor: '#C4C4C426' }}>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16, color: 'black', fontWeight: '500' }}>
                        Reports {'\n'} 1020
                    </Text>
                </View>

                <View style={{ height: 80, width: 160, borderRadius: 15, backgroundColor: '#C4C4C426' }}>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16, color: 'black', fontWeight: '500' }}>
                        Order Placed {'\n'} 4046
                    </Text>
                </View>
            </View>

            <View style={{ borderColor: '#E5E5E5', borderWidth: 1, borderRadius: 10, marginHorizontal: 10, height: 50, marginBottom: 10 }}>
                <IconMap name='map-pin' size={30}
                    style={{
                        color: 'black',
                        marginTop: 10,
                        left: 5
                    }}>
                </IconMap>
                <Text style={{ position: 'absolute', marginLeft: 50, marginTop: 15, fontSize: 16, color: 'black' }}>
                    22, city town, Kathmandu, Nepal
                </Text>
            </View>

            <View style={{ borderColor: '#E5E5E5', borderWidth: 1, borderRadius: 10, marginHorizontal: 10, height: 50 }}>
                <IconMap name='phone' size={30}
                    style={{
                        color: 'black',
                        marginTop: 10,
                        left: 5
                    }}>
                </IconMap>
                <Text style={{ position: 'absolute', marginLeft: 50, marginTop: 15, fontSize: 16, color: 'black' }}>
                    +977 9841675248
                </Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
    },
})

export default ProfileScreen;