import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

const ModalRN = ({transparant, visible, Children, style, onPress}) => {
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={transparant}
        visible={visible}
        style={[{height: 200, backgroundColor: 'red'}, style]}>
        <View
          style={{
            height: 100,
            backgroundColor: 'green',
          }}>
          <TouchableOpacity onPress={onPress}>
            <Text style={{color: 'red', fontSize: 20}}>Tutup</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'black'}}>RATING</Text>
      </Modal>
    </View>
  );
};

export default ModalRN;
