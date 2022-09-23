import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DeleteIcon, SearchIcon} from '../../../Assets';
import {Input} from '../../Atoms';

const Search = ({
  placeholder,
  placeholderTextColor,
  onDelete,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
      />
      <SearchIcon position="absolute" top={32} left={11} />
      <TouchableOpacity activeOpacity={0.7} onPress={onDelete}>
        <DeleteIcon top={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
});

export default Search;
