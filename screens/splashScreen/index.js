import React, {useEffect} from "react";
import LottieView from "lottie-react-native";
import { 
    Text, 
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    StatusBar
 } from "react-native";

 export default Splash = ({navigation}) =>{
    setTimeout(() => {
        navigation.replace('Login')
    }, 3000);

    return <View style={fullScreen.container}
        >
            <StatusBar hidden = {true}/>
        {/* <Image source={require('../../assets/spl.png')}
        style={fullScreen.logo} /> */}
        {/* <Text>WELCOME HADES</Text> */}
        <Image source={require('../../assets/spl1.jpg')}
        style={{
            width: '100%',
            
        }} />
    </View>
    
 }

 const fullScreen = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width : '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    logo: {
        width: '100%',
        objectFit: 'fill'
        
    }
 })