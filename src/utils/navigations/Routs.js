import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import TabNavigator from '../../screens/TabNavigator';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import SetNewPasswordScreen from '../../screens/SetNewPasswordScreen';
import AllDoneScreen from '../../screens/AllDoneScreen';
import CreateRateMap from '../../screens/CreateRateMap';
import ProfileScreen from '../../screens/ProfileScreen';
import ExploreEditScreen from '../../screens/ExploreEditScreen';

const Stack = createNativeStackNavigator();

export const appStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="SplashScreen"
          component={SplashScreen}
        />

        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="SetNewPasswordScreen"
          component={SetNewPasswordScreen}
        />
        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="AllDoneScreen"
          component={AllDoneScreen}
        />
        {/* <Stack.Screen
          options={{ headerTransparent: true, headerShown: false }}
          name="CreateRateMap"
          component={CreateRateMap}
        /> */}

        {/* <Stack.Screen
          options={{ headerTransparent: true, headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        /> */}

        <Stack.Screen
          options={{headerTransparent: true, headerShown: false}}
          name="ExploreEditScreen"
          component={ExploreEditScreen}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}} // Hide the stack header for TabNavigator
        />
      </Stack.Navigator>
    </>
  );
};
