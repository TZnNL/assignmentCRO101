import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image, Dimensions, ImageBackground} from "react-native";
import React, { useEffect, useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import SInfo from 'react-native-sensitive-info';
// import User from "../../data/objects/User";
// import { CheckBox } from 'react-native-elements';
// import { SvgXml } from 'react-native-svg';


const widthWD = Dimensions.get("window");
// const user = new User();
// // Lưu trữ dữ liệu
// const saveData = async () => {
//   await SInfo.setItem('key', 'value', {});
// };

// // Đọc dữ liệu
// const readData = async () => {
//   const value = await SInfo.getItem('key', {});
//   console.log('Giá trị lưu trữ:', value);
// };

export default App = ({ navigation }) => {
  const [getUsername, setUsername] = useState('');
  const [getPW, setPW] = useState('');
  const [getCheckVal, setCheckVal] = useState(false);
  useEffect(() => {
    console.log("getUsername updated:", getUsername);
  }, [getUsername]);
  useEffect(() => {
    console.log("getpw updated:", getPW);
  }, [getPW]);
  return (
    <ImageBackground source={(require('../../assets/bg1.jpg'))}
    style={{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }}>
      <View style={styles.container}>
      <Image source={require('../../assets/spl.png')} style={styles.logo} />
      <Text style={styles.loginText} >Login</Text>

      <View style={styles.boxLogin}>
        <Text style={{ paddingLeft: 20 }}>Email or Username</Text>
        <TextInput
          placeholder="Email/Username"
          onChangeText={(text) => {
            setUsername(text);
          }}
          style={{ borderColor: 'black', width: '90%', padding: 20 }}
        />
        <Text style={{ paddingLeft: 20 }}>Password</Text>
        <TextInput
          placeholder="Password"
          onChangeText={(text) => {
            setPW(text)
          }}
          style={{ borderColor: 'black', width: '90%', padding: 20 }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="green"
          text="Ghi nhớ tài khoản"
          iconStyle={{borderColor:"green"}}
          unfillColor="#FFFFFF"
          paddingLeft={25}
          onPress={() =>{
            setCheckVal(!getCheckVal)
          }}
        />
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }} >
        <TouchableOpacity style={{ width: '40%', backgroundColor: 'white', padding: '3%', alignItems: 'center', borderRadius: 15, borderColor: '#52D3D8' }}
          onPress={() => {
            navigation.navigate('Home', { us: getUsername, pw: getPW, isCheck: getCheckVal });
          }}><Text style={{ color: '#52D3D8' }}>Đăng nhập</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnReg}
        onPress={()=>{
          navigation.navigate('Register');
        }}><Text>Đăng ký</Text></TouchableOpacity>
      
      </View>
      <View style={{
        width: '100%', alignItems: 'center', borderBottomColor: 'black',
        borderBottomWidth: 2,
      }}>
        <Text style={styles.textdangnhap}>Đăng nhập bằng cách khác</Text>
        {/* <SvgXml xml={require('../../assets/googlelogo.svg')} width= '100%' height="100%"/> */}

      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }} >
        <Image style={styles.loginlogo} source={(require('../../assets/googlelogo.png'))} />
        <Image style={styles.loginlogo} source={(require('../../assets/fblogo.png'))} />
        <Image style={styles.loginlogo} source={(require('../../assets/zalologo.png'))} />
      </View>
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  textdangnhap: {
    fontSize: 18,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%',
    textAlign: 'center',
    marginTop: 50,
    color: 'white'
  },
  loginlogo: {
    width: widthWD.width * 0.1,
    objectFit: 'fill',
    height: 50
  },
  boxLogin: { width: '80%', 
  height: widthWD.height * 0.3, 
  backgroundColor: 'white', 
  opacity: 1 , 
  marginBottom: 35,
  justifyContent: 'center',
  alignContent: 'center',
  marginHorizontal: '10%',
  borderRadius: 20

},
loginText:{
  alignItems: 'center', width: '100%',
  fontSize: 25,
  justifyContent:'center',
  textAlign:'center',
  marginTop: -30,
  marginBottom: 10
},
btnReg:{ width: '40%', 
backgroundColor: '#FF90BC', 
padding: '3%', 
alignItems: 'center', 
borderRadius: 15, 
borderColor: '#52D3D8' }
});
