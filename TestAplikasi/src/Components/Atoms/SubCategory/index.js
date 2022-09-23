import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Gap from '../Gap';

const SubCategory = ({children, titleCategory}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>{titleCategory}</Text>
        <Icon.Button
          name="th-large"
          size={20}
          backgroundColor="white"
          color="grey"
        />
      </View>
      {children}
      <Gap height={10} />
    </>
  );
};

export default SubCategory;

const styles = StyleSheet.create({});
