import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from '../Search';

const {width, height} = Dimensions.get('window');

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
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    height: 50,
    backgroundColor: 'grey',
    marginLeft: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
