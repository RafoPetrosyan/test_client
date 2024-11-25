import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenProps } from '../../types';
import styles from './style.ts';

const WelcomeScreen: React.FC<ScreenProps> = ({ navigation }) => {
   const { t } = useTranslation();

   return (
      <View style={styles.container}>
         <ImageBackground
            source={require('../../assets/images/welcomeBg.png')}
            resizeMode="stretch"
            style={styles.image}
         >
            <View style={styles.topContent}>
               <Image
                  style={styles.logo}
                  resizeMode={'contain'}
                  source={require('../../assets/images/logo.png')}
               />
               <Text style={styles.title}>{t('fastAndComfortable')}</Text>
               <Text style={styles.subtitle}>{t('theBestPlaceToTravel')}</Text>
            </View>
            <View style={styles.bottomContent}>
               <TouchableOpacity style={styles.firstButton}>
                  <LinearGradient
                     colors={['#D6990E', '#E2AB2D', '#FFD77D']}
                     start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 0 }}
                     style={styles.gradient}
                  >
                     <Text style={styles.firstButtonText}>{t('signIn')}</Text>
                  </LinearGradient>
               </TouchableOpacity>
               <TouchableOpacity style={styles.secondButton}>
                  <Text style={styles.secondButtonText}>{t('signUp')}</Text>
               </TouchableOpacity>
            </View>
         </ImageBackground>
      </View>
   );
};

export default WelcomeScreen;
