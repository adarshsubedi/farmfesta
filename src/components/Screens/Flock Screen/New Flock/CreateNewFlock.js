import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import MyFlock from '../MyFlock';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateNewFlock = (props) => {

    const { navigation } = props
    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View style={{ backgroundColor: '#E5E5E5B8', height: 100 }}>
                            <TouchableOpacity onPress={() => (navigation.navigate('MyFlock'))}>
                                <Icon name='arrow-back-circle' size={30}
                                    style={{
                                        color: 'red',
                                        marginLeft: 20,
                                        marginTop: 20,
                                    }}>
                                </Icon>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'black', marginHorizontal: 20, marginTop: 18 }}>
                                Let’s start by creating your flock.
                            </Text>
                        </View>

                        <View style={{ backgroundColor: 'white', borderRadius: 10, }}>



                            <TextInput style={styles.input}
                                placeholder={'Flock 13'}
                                placeholderTextColor='black'
                                color='black'
                            />

                            <TextInput style={styles.input}
                                placeholder={'2077-12-09'}
                                placeholderTextColor='#FE0000'
                                color='black'
                            />

                            <TextInput style={styles.input}
                                placeholder={'Add Beeder Company Name'}
                                placeholderTextColor='#B6B5B5'
                                color='black'
                            />

                            <View style={styles.icon}>
                                <TextInput

                                    placeholder={' Select Bread '}
                                    placeholderTextColor="#B6B5B5"
                                    color="white"
                                />
                                <Icons
                                    name="caret-down"
                                    size={25}
                                    style={{
                                        color: '#8C8989',
                                        alignSelf: 'center',
                                        marginLeft: 215,
                                    }}
                                />
                            </View>

                            <View style={styles.icon}>
                                <TextInput

                                    placeholder={' Select Brand '}
                                    placeholderTextColor="#B6B5B5"
                                    color="white"
                                />
                                <Icons
                                    name="caret-down"
                                    size={25}
                                    style={{
                                        color: '#8C8989',
                                        alignSelf: 'center',
                                        marginLeft: 215,
                                    }}
                                />
                            </View>

                            <View style={styles.icon}>
                                <TextInput

                                    placeholder={' Select Age '}
                                    placeholderTextColor="#B6B5B5"
                                    color="white"
                                />
                                <Icons
                                    name="caret-down"
                                    size={25}
                                    style={{
                                        color: '#8C8989',
                                        alignSelf: 'center',
                                        marginLeft: 225,
                                    }}
                                />
                            </View>

                            <View style={styles.icon}>
                                <TextInput

                                    placeholder={' Select Age (In Day) '}
                                    placeholderTextColor="#B6B5B5"
                                    color="white"
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

                            <TextInput style={styles.input}
                                placeholder={'Male Chicks Number'}
                                placeholderTextColor='#B6B5B5'
                                color='black'
                            />

                            <View style={styles.icon}>
                                <TextInput

                                    placeholder={' Male Chicks Price (NPR)'}
                                    placeholderTextColor="#B6B5B5"
                                    color="white"
                                />
                                <Icons
                                    name="caret-down"
                                    size={25}
                                    style={{
                                        color: '#8C8989',
                                        alignSelf: 'center',
                                        marginLeft: 155,
                                    }}
                                />
                            </View>

                            <TextInput style={styles.input}
                                placeholder={'Female Chicks Number'}
                                placeholderTextColor='#B6B5B5'
                                color='black'
                            />

                            <View style={styles.icon}>
                                <TextInput

                                    placeholder={' Female Chicks Price (NPR)'}
                                    placeholderTextColor="#B6B5B5"
                                    color="white"
                                />
                                <Icons
                                    name="caret-down"
                                    size={25}
                                    style={{
                                        color: '#8C8989',
                                        alignSelf: 'center',
                                        marginLeft: 145,
                                    }}
                                />
                            </View>

                            <TextInput style={styles.input}
                                placeholder={'Shed Temp. (C)'}
                                placeholderTextColor='#B6B5B5'
                                color='black'
                            />

                            <TouchableOpacity onPress={() => (navigation.navigate('SetupChicks'))}
                                style={styles.btns}
                            >
                                <Text style={{
                                    fontSize: 17,
                                    fontFamily: 'Public Sans',
                                    textAlign: 'center',
                                    borderRadius: 7,
                                    margin: 12,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>Setup Chicks Inside Pen</Text>
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
    btns: {
        backgroundColor: '#FE0000',
        height: 45,
        margin: 15,
        borderRadius: 7,

    },
})

export default CreateNewFlock;