import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  IChomeOff,
  IChomeOn,
  ICprofileOff,
  ICprofileOn,
  ICwatchListOff,
  ICwatchListOn,
} from '../../../Assets';

const IconBottomTab = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IChomeOn /> : <IChomeOff />;
    case 'WatchList':
      return focus ? <ICwatchListOn /> : <ICwatchListOff />;
    case 'Profile':
      return focus ? <ICprofileOn /> : <ICprofileOff />;
    default:
      return <IChomeOn />;
  }
};

function BottomNavigator({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.containerBottomNavigator}>
            <IconBottomTab label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  containerBottomNavigator: {
    flex: 1,
    paddingHorizontal: 35,
  },
});
