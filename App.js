// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'
import SplashS from './screens/splashScreen/index';
import LoginS from './screens/loginScreen/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import register from './screens/loginScreen/register';
import Homes from './screens/homeScreen/index';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name='Splash' component={SplashS} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginS} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={register} options={{headerShown: true}}/>
        <Stack.Screen name='Home' component={Homes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
