import React, {Children} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../Utils';

const Input = ({
  label,
  placeholder,
  children,
  styleContainer,
  styleInput,
  ...restProps
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <TextInput
        style={[styles.input, styleInput]}
        placeholder={placeholder}
        {...restProps}
        scrollEnabled={true}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.grey,
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 15,
    height: 40,
    // alignItems: 'center',
  },
  input: {
    height: 40,
    fontFamily: fonts.primary['400'],
    color: colors.text.primary,
    marginLeft: 30,
  },
});
