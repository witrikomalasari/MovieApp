import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {colors} from '../../../Utils';
import Search from '../Search';

const {width} = Dimensions.get('window');

const Header = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <Search
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        onDelete={onDelete}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    height: 60,
    backgroundColor: colors.background.primary,
    marginLeft: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
