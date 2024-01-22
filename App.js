import React, {useState} from"react";
import {SafeAreaView} from 'react-native';
import Splash from "./src/screens//auth/Splash";
import SignUp from "./src/screens//auth/SignUp";
import SignIn from "./src/screens//auth/SignIn";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />

      </Stack.navigator>
    </NavigationContainer>
  )
};

export default App;


