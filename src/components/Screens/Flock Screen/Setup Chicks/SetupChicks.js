import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import MyFlock from '../MyFlock';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SetupChicks = (props) => {

    const { navigation } = props
    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View style={{ backgroundColor: '#E5E5E5B8', height: 120 }}>
                            <TouchableOpacity onPress={() => (navigation.navigate('CreateNewFlock'))}>
                                <Icon name='arrow-back-circle' size={30}
                                    style={{
                                        color: 'red',
                                        marginLeft: 20,
                                        marginTop: 20,
                                    }}>
                                </Icon>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'black', marginHorizontal: 20, marginTop: 18 }}>
                                You may now put your chicks in {'\n'} various pens.
                            </Text>
                        </View>

                        <View style={{ backgroundColor: 'white', borderRadius: 10, }}>

                            <TextInput style={styles.input}
                                placeholder={'Flock Size'}
                                placeholderTextColor='#B6B5B5'
                                color='black'
                            />

                            <View style={styles.shedicon}>
                                <TextInput

                                    placeholder={' Please select Shed '}
                                    placeholderTextColor="red"
                                    color="black"

                                />
                                <Icons
                                    name="caret-down"
                                    size={25}
                                    style={{
                                        color: '#8C8989',
                                        alignSelf: 'center',
                                        marginLeft: 180,
                                    }}
                                />
                            </View>

                            <TouchableOpacity onPress={() => (navigation.navigate('InsidePen'))}
                                style={styles.btns}>
                                <Text style={{
                                    fontSize: 17,
                                    fontFamily: 'Public Sans',
                                    textAlign: 'center',
                                    borderRadius: 7,
                                    margin: 12,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>Create Flock</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
    },
    input: {
        borderColor: '#B6B5B5',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
        fontSize: 16,
    },
    icon: {
        borderColor: '#B6B5B5',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    shedicon: {
        borderColor: 'red',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    btns: {
        backgroundColor: '#FE0000',
        height: 45,
        margin: 15,
        borderRadius: 7,
        marginTop: 440,
    },
})

export default SetupChicks;