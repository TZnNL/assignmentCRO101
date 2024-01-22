import React, { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image, Dimensions, ImageBackground } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import SInfo from 'react-native-sensitive-info';

const widthWD = Dimensions.get("window");

const App = ({ navigation }) => {
    const [getUS, setUS] = useState('');
    const [getPW, setPW] = useState('');
    const [getName, setName] = useState('');
    const [getcfPW, setcfPW] = useState('');

    // useEffect(() => {
    //     console.log("getUS updated:", getUS);
    // }, [getUS]);
    
    // useEffect(() => {
    //     console.log("getPW updated:", getPW);
    // }, [getPW]);

    return (
        <ImageBackground source={require('../../assets/bg1.jpg')}
            style={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
            }}>
            <View style={styles.container}>
                <Image source={require('../../assets/spl.png')} style={styles.logo} />
                <Text style={styles.loginText}>Register</Text>

                <View style={styles.boxLogin}>
                    <Text style={styles.boxInput}>Tên đăng nhập hoặc email</Text>
                    <TextInput
                        placeholder="Email/Username"
                        onChangeText={(us) => setUS(us)}
                        style={{ borderColor: 'black', width: '90%', padding: 20 }}
                    />
                    <Text style={styles.boxInput}>Họ tên</Text>
                    <TextInput
                        placeholder="Họ tên"
                        onChangeText={(name) => setName(name)}
                        style={{ borderColor: 'black', width: '90%', padding: 20 }}
                    />
                    <Text style={styles.boxInput}>Mật khẩu</Text>
                    <TextInput
                        placeholder="Mật khẩu"
                        onChangeText={(pw) => setPW(pw)}
                        style={{ borderColor: 'black', width: '90%', padding: 20 }}
                    />
                    <Text style={styles.boxInput}>Nhâp lại mật khẩu</Text>
                    <TextInput
                        placeholder="Nhâp lại mật khẩu"
                        onChangeText={(pw) => setcfPW(pw)}
                        style={{ borderColor: 'black', width: '90%', padding: 20 }}
                    />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }} >
                    <TouchableOpacity style={{ width: '40%', backgroundColor: 'white', padding: '3%', alignItems: 'center', borderRadius: 15, borderColor: '#52D3D8' }}
                        onPress={() => {
                            navigation.navigate('Home', { us: getUS, pw: getPW });
                        }}>
                        <Text style={{ color: '#52D3D8' }}>Đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Text>Quay lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
    },
    loginText: {
        alignItems: 'center', width: '100%',
        fontSize: 25,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: -30,
        marginBottom: 10,
        color: 'white'
    },
    boxLogin: {
        width: '80%',
        height: 'auto',
        backgroundColor: 'white',
        opacity: 1,
        marginBottom: 35,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: '10%',
        borderRadius: 20,
        paddingVertical: 8
    },
    boxInput: {
        paddingHorizontal: 20,
        paddingVertical: 7
    },
    btnBack: { width: '40%', backgroundColor: '#FF90BC', padding: '3%', alignItems: 'center', borderRadius: 15, borderColor: '#52D3D8' }
});

export default App;
