import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CurrentWeather from '../../Weather/CurrentWeather';
import helper from '../../Weather/helper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Dashboard = () => {

    const navigation = useNavigation();

    const [weatherData,setWeatherData]=useState({});
    const [isLoading,setLoading]=useState(false);

    
    useEffect(()=>{
        const getWeatherData=async()=>{
            setLoading(true);

            const weatherData=await helper('Kathmandu');
            setWeatherData(weatherData);

            setLoading(false);
        }
        
        getWeatherData();
    },[]);

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center',zIndex:1}}>

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

            </View>

            <View style={{ flexDirection: 'row', marginTop: 65 }}>
                <View style={styles.containerleft}>
                    <CurrentWeather
                        weather={weatherData}
                        isLoading={isLoading}
                    />

                </View>


                <View style={styles.containerright}>
                    <CurrentWeather
                        weather={weatherData}
                        isLoading={isLoading}
                    />

                </View>
            </View>

            <View style={styles.middleline}>

            </View>

            <View style={{ backgroundColor: '#FEB700', borderRadius: 25, height: 45, width: 45, position: 'absolute', marginTop: 210, marginLeft: 175,zIndex:1 }}>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        flex:1,
    },

    containerleft: {
        height: 250,
        width: '47%',
        backgroundColor: '#f2392e',
        borderTopRightRadius: 20,
        marginRight: 20,
    },

    middleline: {
        backgroundColor: '#f2392e',
        height: 450,
        width: 8,
        marginLeft: 191,
        marginTop: 250,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        position: 'absolute',
    },

    containerright: {
        height: 250,
        width: '49%',
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