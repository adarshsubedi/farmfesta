import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMap from 'react-native-vector-icons/MaterialCommunityIcons';
import IconCall from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', height: 250, backgroundColor: '#FEB700', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                <TouchableOpacity>
                    <Icon name='chevron-back-sharp' size={30}
                        style={{
                            color: 'black',
                        }}>
                    </Icon>
                </TouchableOpacity>

                <Text style={{ textAlign: 'center' }}>
                    My Profile
                </Text>
            </View>

            <View>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
                    Govinda Lal Poudel
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 14 }}>
                    Farm User
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 80, borderRadius: 15, backgroundColor: '#C4C4C426' }}>
                    <Text>
                        Reports 1020
                    </Text>
                </View>

                <View style={{ height: 80, borderRadius: 15, backgroundColor: '#C4C4C426' }}>
                    <Text>
                        Order Placed 4046
                    </Text>
                </View>
            </View>

            <View style={{ borderColor: '#E5E5E5', borderWidth: 1, marginHorizontal: 10 }}>
                <IconMap name='map-marker-outline' size={30}
                    style={{
                        color: 'white',
                    }}>
                </IconMap>
                <Text>
                    22, city town, Kathmandu, Nepal
                </Text>
            </View>

            <View style={{ borderColor: '#E5E5E5', borderWidth: 1, marginHorizontal: 10 }}>
                <IconCall name='call-outline' size={30}
                    style={{
                        color: 'white',
                    }}>
                </IconCall>
                <Text>
                    +977 9841675248
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
    },
})

export default ProfileScreen;