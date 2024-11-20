import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ScreenProps } from '../../types';
import COLORS from '../../constants/colors.ts';
import SCREENS from '../../constants/screens.ts';

const OTPVerificationScreen: React.FC<ScreenProps> = ({ route, navigation }) => {
   const [code, setCode] = useState('');
   const { confirmation } = route.params || {};

   const handleVerifyOTP = async () => {
      if (code.length !== 4) {
         Alert.alert('Սխալ կոդ', 'Խնդրում ենք մուտքգրել քառնիշ հաստատման կոդը');
         return;
      }
      navigation.navigate(SCREENS.USER_INFO);
      // try {
      //    await confirmation.confirm(code);
      //    navigation.navigate('UserInfo');
      // } catch (error) {
      //    console.error('Invalid code.', error);
      //    Alert.alert('Հեռախոսահամարը չի հաստատվել', 'Կոդը որը մուտքագրում եք սխալ է');
      // }
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Հաստատեք ձեր հեռախոսահամարը</Text>
         <Text style={styles.subtitle}>
            Մուտքագրեք քառանիշ թիվը որը ուղարկվել է ձեր հեռախոսահամարին
         </Text>

         <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="1234"
            placeholderTextColor="#c9e7ca"
            value={code}
            onChangeText={setCode}
            maxLength={4}
         />

         <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
            <Text style={styles.buttonText}>Հաստատել</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.baseBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
   },
   title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: COLORS.primary,
      marginBottom: 10,
      textAlign: 'center',
   },
   subtitle: {
      fontSize: 16,
      color: COLORS.secondary,
      marginBottom: 30,
      textAlign: 'center',
   },
   input: {
      width: '100%',
      backgroundColor: COLORS.white,
      borderRadius: 10,
      padding: 15,
      fontSize: 20,
      textAlign: 'center',
      borderWidth: 1,
      borderColor: COLORS.borderColor,
      color: COLORS.black,
      marginBottom: 20,
      letterSpacing: 4,
   },
   button: {
      backgroundColor: COLORS.primaryButton,
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 30,
      alignItems: 'center',
      width: '100%',
   },
   buttonText: {
      color: COLORS.white,
      fontSize: 18,
      fontWeight: 'bold',
   },
});

export default OTPVerificationScreen;
