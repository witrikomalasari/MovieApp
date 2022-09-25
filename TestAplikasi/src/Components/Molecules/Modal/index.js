import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

const ModalRn = ({transparant, visible, Children, style, onPress}) => {
  return (
    <View>
      <Modal
        // style={style}
        animationType="slide"
        transparent={transparant}
        visible={visible}>
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

export default ModalRn;
