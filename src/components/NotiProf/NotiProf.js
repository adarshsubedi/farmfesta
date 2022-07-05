import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const NotiProf = (props) => {
    const { navigation } = props

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 8, marginRight: 50, fontSize: 15 }}>
                Farm Name
            </Text>

            <TouchableOpacity>
                <Icon name='notifications-outline' size={30}
                    style={{
                        color: 'red',
                    }}>
                </Icon>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (navigation.navigate('ProfileScreen'))}>
                <Icon name='person-circle' size={30}
                    style={{
                        color: 'red',
                        marginLeft: 20,
                    }}>
                </Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})

export default NotiProf;