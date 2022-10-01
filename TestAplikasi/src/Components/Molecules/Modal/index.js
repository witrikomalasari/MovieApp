import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

const ModalRN = ({transparent, visible, onPress, title, number}) => {
  return (
    <View style={{flex: 1}}>
      <Modal animationType="slide" transparent={transparent} visible={visible}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={onPress}
            style={{backgroundColor: 'lightblue'}}>
            <Text style={{color: 'white', fontSize: 20}}>Tutup</Text>
          </TouchableOpacity>
          <Rating number={number} />
          <Text style={{color: 'black', textAlign: 'center'}}>{title}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ModalRN;

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
});
