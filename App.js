import React, {useState} from"react";
import {SafeAreaView} from 'react-native';
import Splash from "./src/screens//auth/Splash";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import ViewComponent from "./src/screens/lap 3";
import Lap5 from "./src/screens/lap5";

const App = () => {

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Splash" component={Splash} />
    //     <Stack.Screen name="SignIn" component={SignIn}  />
    //     <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    //<ViewComponent/>
    <Lap5></Lap5>
  );
};

export default App;


