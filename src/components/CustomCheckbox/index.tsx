import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import CheckedIcon from '../../assets/svg/CheckedIcon';
import normalize from '../../utils/normalize.ts';
import COLORS from '../../constants/colors.ts';
import { fontFamilies } from '../../constants/fonts.ts';

type Props = {
   label: string;
   isChecked: boolean;
   onToggle: () => void;
};

const CustomCheckbox: React.FC<Props> = ({ label, isChecked, onToggle }) => {
   return (
      <TouchableOpacity style={styles.checkboxContainer} onPress={onToggle}>
         <View style={styles.checkbox}>
            {isChecked && <CheckedIcon width={18} height={18} fill={COLORS.brown} />}
         </View>
         <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: normalize(10),
   },
   checkbox: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      borderWidth: 1,
      borderColor: COLORS.brown,
      borderRadius: 3.5,
   },
   checkboxInner: {
      width: 12,
      height: 12,
      backgroundColor: '#fff',
   },
   label: {
      fontSize: 12,
      color: COLORS.secondaryText,
      fontFamily: fontFamilies.MONTSERRAT['300'],
      fontWeight: '300',
   },
});

export default CustomCheckbox;
