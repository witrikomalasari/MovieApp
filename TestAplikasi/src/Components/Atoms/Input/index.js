import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label, placeholder, ...restProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
        scrollEnabled={true}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
