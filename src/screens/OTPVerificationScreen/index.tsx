import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { ScreenProps } from '../../types';
import styles from './style.ts';
import COLORS from '../../constants/colors.ts';
import { IS_IOS_PLATFORM } from '../../constants';

const OTPVerificationScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();

   const onSubmit = () => {};

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={IS_IOS_PLATFORM ? 'padding' : undefined}
         keyboardVerticalOffset={IS_IOS_PLATFORM ? 60 : 0}
      >
         <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
               <View style={styles.contents}>
                  <View style={styles.topContent}>
                     <Text style={styles.title}>{t('enterCode')}</Text>
                     <Text style={styles.subtitle}>{t('enterFourDigitNumber')}</Text>
                     <View style={styles.form}>
                        <OTPTextInput
                           tintColor={COLORS.secondaryText}
                           textInputStyle={styles.textInputStyle}
                           // handleTextChange={onChangeCode}
                        />
                        <View style={styles.resendContent}>
                           <Text style={styles.time}>01:52</Text>
                           <TouchableOpacity>
                              <Text style={styles.resend}>{t('resend')}</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                  </View>
                  <View style={styles.bottomContent}>
                     <TouchableOpacity style={styles.firstButton} onPress={onSubmit}>
                        <LinearGradient
                           colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                           start={{ x: 0, y: 0 }}
                           end={{ x: 1, y: 0 }}
                           style={styles.gradient}
                        >
                           <Text style={styles.firstButtonText}>{t('confirm')}</Text>
                        </LinearGradient>
                     </TouchableOpacity>
                     <View style={styles.secondButton}></View>
                  </View>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default OTPVerificationScreen;
