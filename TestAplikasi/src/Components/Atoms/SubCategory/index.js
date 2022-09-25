import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts} from '../../../Utils';

const SubCategory = ({children, titleCategory}) => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.text.secondary,
            fontFamily: fonts.primary['700'],
          }}>
          {titleCategory}
        </Text>
        <Icon.Button
          name="th-large"
          size={20}
          backgroundColor={colors.background.white}
          color="grey"
        />
      </View>
      {children}
    </>
  );
};

export default SubCategory;
