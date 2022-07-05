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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={{ backgroundColor: '#E5E5E5B8', height: 120 }}>
                        <TouchableOpacity onPress={() => (navigation.navigate('SetupChicks'))}>
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
                            placeholderTextColor='black'
                            color='black'
                        />

                        <View style={styles.shedicon}>
                            <TextInput

                                placeholder={'Shed 23'}
                                placeholderTextColor="black"
                                color="black"
                                fontWeight="bold"

                            />
                            <Icons
                                name="caret-down"
                                size={25}
                                style={{
                                    color: '#8C8989',
                                    alignSelf: 'center',
                                    marginLeft: 240,
                                }}
                            />
                        </View>


                        <View style={{
                            borderColor: '#B6B5B5',
                            borderWidth: 1,
                            height: 80,
                            marginVertical: 10,
                            marginHorizontal: 10,
                            borderRadius: 10
                        }}>


                            <Text style={{ marginHorizontal: 10, marginBottom: 10, fontSize: 11, color: '#8C8989' }}>
                                Shed 23: Pen 1
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={styles.inner2}>
                                    <Text style={{ fontSize: 11, marginHorizontal: 10 }}>
                                        Male Chicks
                                    </Text>
                                    <TextInput
                                        placeholder="Add male chicks number"
                                    />
                                </View>

                                <View style={styles.inner2}>
                                    <Text style={{ fontSize: 11, marginHorizontal: 10 }}>
                                        Female Chicks
                                    </Text>
                                    <TextInput
                                        placeholder="Add female chicks number"
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{
                            borderColor: '#B6B5B5',
                            borderWidth: 1,
                            height: 80,
                            marginVertical: 10,
                            marginHorizontal: 10,
                            borderRadius: 10
                        }}>


                            <Text style={{ marginHorizontal: 10, marginBottom: 10, fontSize: 11, color: '#8C8989' }}>
                                Shed 23: Pen 1
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={styles.inner2}>
                                    <Text style={{ fontSize: 11, marginHorizontal: 10 }}>
                                        Male Chicks
                                    </Text>
                                    <TextInput
                                        placeholder="Add male chicks number"
                                    />
                                </View>

                                <View style={styles.inner2}>
                                    <Text style={{ fontSize: 11, marginHorizontal: 10 }}>
                                        Female Chicks
                                    </Text>
                                    <TextInput
                                        placeholder="Add female chicks number"
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{
                            borderColor: '#B6B5B5',
                            borderWidth: 1,
                            height: 80,
                            marginVertical: 10,
                            marginHorizontal: 10,
                            borderRadius: 10
                        }}>


                            <Text style={{ marginHorizontal: 10, marginBottom: 10, fontSize: 11, color: '#8C8989' }}>
                                Shed 23: Pen 1
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={styles.inner2}>
                                    <Text style={{ fontSize: 11, marginHorizontal: 10 }}>
                                        Male Chicks
                                    </Text>
                                    <TextInput
                                        placeholder="Add male chicks number"
                                    />
                                </View>

                                <View style={styles.inner2}>
                                    <Text style={{ fontSize: 11, marginHorizontal: 10 }}>
                                        Female Chicks
                                    </Text>
                                    <TextInput
                                        placeholder="Add female chicks number"
                                    />
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.btns}>
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
        fontWeight: 'bold',
    },
    inner1: {
        borderColor: '#FEB700',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        height: 50,
    },
    inner2: {
        borderColor: '#FEB700',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        height: 50,
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
        borderColor: '#B6B5B5',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        paddingLeft: 10,
        flexDirection: 'row',
        width: 340,
    },
    btns: {
        backgroundColor: '#FE0000',
        height: 45,
        margin: 15,
        borderRadius: 7,
        marginTop: 140,
    },
})

export default SetupChicks;