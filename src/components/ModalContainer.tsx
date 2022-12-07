import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  content: any;
  firstButtonText: string;
  firstButtonAction: any;
  secondButtonText?: string;
  secondButtonAction?: any;
}
export const ModalContainer = ({
  modalVisible,
  setModalVisible,
  content,
  firstButtonText,
  firstButtonAction,
  secondButtonText,
  secondButtonAction,
}: Props) => {
  return (
    <>
      {modalVisible && (
        <View
          style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
            elevation: 1,
          }}
        />
      )}
      <View style={[styles.centeredView]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Pressable
            style={{flex: 1}}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.contentView}>
                <Text style={styles.contentText}>{content}</Text>
              </View>
              <TouchableOpacity onPress={() => firstButtonAction()}>
                <View style={styles.modalButtonView}>
                  <Text style={{color: '#FF003D'}}>{firstButtonText}</Text>
                </View>
              </TouchableOpacity>
              {secondButtonText && (
                <TouchableOpacity onPress={() => secondButtonAction()}>
                  <View style={styles.modalButtonView}>
                    <Text>{secondButtonText}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    left: '50%',
    bottom: Dimensions.get('window').width * 0.6,
    transform: [{translateX: -Dimensions.get('window').width * 0.44}],
  },
  modalView: {
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width - 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contentView: {
    justifyContent: 'center',
    height: Dimensions.get('window').height * 0.25,
  },
  contentText: {
    textAlign: 'center',
  },
  modalButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
