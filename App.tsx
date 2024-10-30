import React from 'react';
import SplashScreen from './src/page/SplashScreen';
import SignIn from './src/page/SignIn';
import SignUp from './src/page/SignUp';
import Home from './src/page/Home';
import CashonHand from './src/page/CashonHand';
import CashonBank from './src/page/CashonBank';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CashonBank"
          component={CashonBank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CashonHand"
          component={CashonHand}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
