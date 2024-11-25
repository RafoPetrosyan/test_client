import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors.ts';
import normalize from '../../utils/normalize.ts';
import { fontFamilies } from '../../constants/fonts.ts';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.baseBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
   },
   topContent: {
      marginTop: normalize(187, true),
      alignItems: 'center',
      flex: 1,
   },
   bottomContent: {
      alignItems: 'center',
      marginBottom: normalize(58, true),
   },
   image: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
   },
   title: {
      fontSize: 24,
      fontWeight: '500',
      color: COLORS.primaryText,
      marginBottom: 10,
      fontFamily: fontFamilies.MONTSERRAT[500],
      lineHeight: 29,
      marginTop: normalize(59, true),
   },
   subtitle: {
      fontSize: 15,
      color: COLORS.secondaryText,
      marginBottom: 30,
      textAlign: 'center',
      fontFamily: fontFamilies.MONTSERRAT[400],
      lineHeight: 18,
   },
   logo: {
      width: normalize(146),
      height: normalize(204, true),
   },
   gradient: {
      height: normalize(53, true),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
   },
   firstButton: {
      width: normalize(354),
      borderRadius: 14,
   },
   firstButtonText: {
      color: COLORS.white,
      fontFamily: fontFamilies.MONTSERRAT[400],
      fontSize: 14,
   },
   secondButton: {
      marginTop: normalize(14),
   },
   secondButtonText: {
      color: COLORS.brown,
      fontFamily: fontFamilies.MONTSERRAT[400],
      fontSize: 14,
   },
});

export default styles;
