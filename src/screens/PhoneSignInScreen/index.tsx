import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ScreenProps } from '../../types';
import COLORS from '../../constants/colors.ts';
import SCREENS from '../../constants/screens.ts';

const PhoneSignInScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const [phone, setPhone] = useState('');

   const handleSendOTP = async () => {
      if (!phone.startsWith('+374')) {
         Alert.alert('Սխալ հեռախոսահամար', 'Խնդրում ենք մուտքագրել ճիշտ հեռախոսահամար');
         return;
      }
      navigation.navigate(SCREENS.OTP_VERIFICATION);
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Բարի գալուստ TaxiApp</Text>
         <Text style={styles.subtitle}>Մուտքագրեք ձեր հեռախոսահամարը</Text>

         <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="+374 XX XXX XXX"
            placeholderTextColor="#c9e7ca"
            value={phone}
            onChangeText={setPhone}
         />

         <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
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
      fontSize: 16,
      borderWidth: 1,
      borderColor: COLORS.borderColor,
      color: COLORS.black,
      marginBottom: 20,
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

export default PhoneSignInScreen;
