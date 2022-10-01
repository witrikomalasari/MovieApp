import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts} from '../../../Utils';
import Gap from '../Gap';

const SubCategory = props => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <Text
          style={{
            color: colors.text.secondary,
            fontFamily: fonts.primary['700'],
          }}>
          {props.titleCategory}
        </Text>

        <Icon.Button
          name="th-large"
          size={20}
          backgroundColor={colors.background.white}
          color="grey"
          onPress={props.navigation}
        />
      </View>
      {props.children}
    </>
  );
};

export default SubCategory;
