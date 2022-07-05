import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const LoginScreen = (props) => {

    const { navigation } = props

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Image source={require('../../images/farmer1.png')}
                            style={{ height: 170, width: 170, alignSelf: 'center', marginTop: 120, marginLeft: 30 }}
                        />
                        <Text style={{ fontSize: 50, color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
                            Farm Festa
                        </Text>

                        <View>
                            <TextInput
                                style={styles.input}
                                // value={email}
                                // onChangeText={e => setEmail(e)}
                                // placeholder={'Email'}
                                placeholderTextColor='black'
                                color='black'
                            />

                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                // value={email}
                                // onChangeText={e => setEmail(e)}
                                // placeholder={'Email'}
                                placeholderTextColor='black'
                                color='black'
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('Dashboard')}
                        // onPress={async () => {
                        //     const token = await callGetUsersList();
                        //     console.log(token);
                        //     signIn(token);

                        // }} 
                        >
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'Public Sans',
                                textAlign: 'center',
                                borderRadius: 7,
                                margin: 12,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>Sign in</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 22, textAlign: 'center', color: 'black' }}>
                            Forget Password?
                        </Text>

                        <Text style={{ fontSize: 22, textAlign: 'center', color: 'black', marginTop: 40 }}>
                            Don't have an account?
                        </Text>

                        <TouchableOpacity
                            style={styles.btns}
                        // onPress={async () => {
                        //     const token = await callGetUsersList();
                        //     console.log(token);
                        //     signIn(token);

                        // }} 
                        >
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'Public Sans',
                                textAlign: 'center',
                                borderRadius: 7,
                                margin: 12,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>Already have a code</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView >
        </ScrollView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 15,
    },
    btn: {
        backgroundColor: '#FEA500',
        height: 45,
        margin: 15,
        borderRadius: 7,

    },
    btns: {
        backgroundColor: '#FE0000',
        height: 45,
        margin: 15,
        borderRadius: 7,

    },
})