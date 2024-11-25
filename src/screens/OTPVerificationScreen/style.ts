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
      marginTop: normalize(83, true),
      flex: 1,
   },
   textInputStyle: {
      borderWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: '#DEDEE8',
      width: normalize(72),
      height: normalize(74),
      borderRadius: 7,
   },
   bottomContent: {
      alignItems: 'center',
      marginBottom: normalize(58, true),
      marginTop: normalize(15, true),
   },
   contents: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   form: {
      marginTop: normalize(70, true),
   },
   title: {
      fontSize: 24,
      fontWeight: '500',
      color: COLORS.primaryText,
      marginBottom: 5,
      fontFamily: fontFamilies.MONTSERRAT[500],
      lineHeight: 29,
      marginTop: normalize(59, true),
   },
   subtitle: {
      fontSize: 14,
      color: COLORS.secondaryText,
      marginBottom: 30,
      fontFamily: fontFamilies.MONTSERRAT[400],
      lineHeight: 18,
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
      flexDirection: 'row',
   },
   secondButtonText: {
      color: COLORS.secondaryText,
      fontFamily: fontFamilies.MONTSERRAT[400],
      fontSize: 14,
   },
   resendContent: {
      marginTop: normalize(49, true),
      alignItems: 'center',
   },
   time: {
      color: '#9AA2AE',
      fontFamily: fontFamilies.MONTSERRAT['500'],
      fontWeight: '500',
      fontSize: 20,
   },
   resend: {
      fontWeight: '500',
      fontSize: 20,
      color: COLORS.brown,
      fontFamily: fontFamilies.MONTSERRAT['500'],
   },
});

export default styles;
