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
      <SearchIcon position="absolute" top={34} left={11} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onDelete}
        style={{
          paddingRight: 20,
          alignItems: 'center',
        }}>
        <DeleteIcon top={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 35,
    // alignItems: 'center',
  },
});

export default Search;
