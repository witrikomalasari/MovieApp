import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DeleteIcon, SearchIcon} from '../../../Assets';
import {Input} from '../../Atoms';

const {width} = Dimensions.get('window');

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
      <SearchIcon position="absolute" top={12} left={44} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onDelete}
        style={{
          paddingRight: 20,
          alignItems: 'center',
        }}>
        <DeleteIcon top={13} left={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 35,
    paddingRight: 8,
  },
});

export default Search;
