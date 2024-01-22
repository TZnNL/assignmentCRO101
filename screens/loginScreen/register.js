import React, { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image, ImageBackground, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

const App = ({ navigation }) => {
    const [getUS, setUS] = useState('');
    const [getPW, setPW] = useState('');
    const [getName, setName] = useState('');
    const [getcfPW, setcfPW] = useState('');

    const handleRegister = () => {
        // Xử lý logic đăng ký ở đây
    };

    return (
        <ImageBackground
            source={require('../../assets/bg1.jpg')}
            style={styles.backgroundImage}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView contentContainerStyle={styles.scrollView}>

                <Image source={require('../../assets/spl.png')} style={styles.logo} />
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Register</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Email/Username"
                                onChangeText={(us) => setUS(us)}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Họ tên"
                                onChangeText={(name) => setName(name)}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Mật khẩu"
                                onChangeText={(pw) => setPW(pw)}
                                style={styles.input}
                                secureTextEntry
                            />
                            <TextInput
                                placeholder="Nhập lại mật khẩu"
                                onChangeText={(pw) => setcfPW(pw)}
                                style={styles.input}
                                secureTextEntry
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.registerButton}
                                onPress={handleRegister}
                            >
                                <Text style={styles.buttonText}>Đăng ký</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Text>Quay lại</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    loginContainer: {
        width: '80%',
        backgroundColor: 'white',
        opacity: 1,
        marginBottom: 130,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: '10%',
        borderRadius: 20,
        paddingVertical: 8,
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
    },
    loginText: {
        fontSize: 25,
        textAlign: 'center',
        // marginTop: -30,
        marginBottom: 10,
        color: 'black',
    },
    inputContainer: {
        width: '100%',
        padding: 20,

    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        margin: 'auto',
        height: 40,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    registerButton: {
        width: '40%',
        backgroundColor: 'white',
        padding: '3%',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#52D3D8',
    },
    backButton: {
        width: '40%',
        backgroundColor: '#FF90BC',
        padding: '3%',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#52D3D8',
    },
    buttonText: {
        color: '#52D3D8',
    },
});

export default App;
