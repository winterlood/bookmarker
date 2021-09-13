import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  isVisible: boolean;
};

const AddBookmarkModal = (props: Props) => {
  return (
    <Modal
      animationIn={'bounceIn'}
      animationOut={'bounceInDown'}
      isVisible={props.isVisible}>
      <View style={style.container}>
        <View style={style.head}>
          <Text>Add bookmark</Text>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddBookmarkModal;
