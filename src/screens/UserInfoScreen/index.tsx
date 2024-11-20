import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ScreenProps } from '../../types';
import COLORS from '../../constants/colors.ts';

type FormData = {
   firstName: string;
   lastName: string;
};

const UserInfoScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>();

   const onSubmit = (data: FormData) => {
      console.log('User Info:', data);
      navigation.navigate('Home');
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Complete Your Profile</Text>
         <Text style={styles.subtitle}>Enter your first and last name</Text>

         {/* First Name Input */}
         <Controller
            control={control}
            name="firstName"
            rules={{ required: 'First name is required' }}
            render={({ field: { onChange, value } }) => (
               <TextInput
                  style={[styles.input, errors.firstName && styles.inputError]}
                  placeholder="First Name"
                  placeholderTextColor="#c9e7ca"
                  onChangeText={onChange}
                  value={value}
               />
            )}
         />
         {errors.firstName && <Text style={styles.errorText}>{errors.firstName.message}</Text>}

         {/* Last Name Input */}
         <Controller
            control={control}
            name="lastName"
            rules={{ required: 'Last name is required' }}
            render={({ field: { onChange, value } }) => (
               <TextInput
                  style={[styles.input, errors.lastName && styles.inputError]}
                  placeholder="Last Name"
                  placeholderTextColor="#c9e7ca"
                  onChangeText={onChange}
                  value={value}
               />
            )}
         />
         {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}

         {/* Submit Button */}
         <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Save and Continue</Text>
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
      color: COLORS.primary,
      marginBottom: 10,
   },
   inputError: {
      borderColor: COLORS.danger,
   },
   errorText: {
      color: COLORS.danger,
      fontSize: 14,
      marginBottom: 10,
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

export default UserInfoScreen;
