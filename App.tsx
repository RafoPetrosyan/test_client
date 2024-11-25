import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/services/navigations.ts';
import Tabs from './src/navigations/tabs';
import { store } from './src/store/store.ts';
import SCREENS from './src/constants/screens.ts';
import PhoneSignInScreen from './src/screens/PhoneSignInScreen';
import OTPVerificationScreen from './src/screens/OTPVerificationScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';

type ParamList = {
   PhoneSignInScreen: undefined;
   OTPVerificationScreen: undefined;
};

const AuthStack = createStackNavigator<ParamList>();

const App: React.FC = () => {
   const backgroundStyle = {
      backgroundColor: Colors.transparent,
      flex: 1,
   };

   return (
      <Provider store={store}>
         <View style={backgroundStyle}>
            <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent={true} />
            <SafeAreaProvider>
               <NavigationContainer ref={navigationRef}>
                  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                     <AuthStack.Screen
                        name={SCREENS.OTP_VERIFICATION}
                        component={OTPVerificationScreen}
                     />
                     <AuthStack.Screen name={SCREENS.SIGN_IN_SCREEN} component={SignInScreen} />
                     <AuthStack.Screen name={SCREENS.SIGN_UP_SCREEN} component={SignUpScreen} />
                     <AuthStack.Screen name={SCREENS.WELCOME_SCREEN} component={WelcomeScreen} />
                     <AuthStack.Screen name={SCREENS.PHONE_SIGN_IN} component={PhoneSignInScreen} />
                  </AuthStack.Navigator>
                  {/*<Tabs />*/}
               </NavigationContainer>
            </SafeAreaProvider>
         </View>
      </Provider>
   );
};

export default App;
