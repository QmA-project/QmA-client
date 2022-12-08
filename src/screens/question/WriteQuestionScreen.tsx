import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Keyboard,
  KeyboardEvent,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView
} from 'react-native';
import {Container} from '../../components/Container';
import {LineRoundButton} from '../../components/LineRoundButton';
import {ModalContainer} from '../../components/ModalContainer';
interface Props {}
export const WriteQuestionScreen = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [publicPushModalVisible, setPublicPushModalVisible] = useState<boolean>(
    false,
  );
  const [privatePushModalVisible, setPrivatePushModalVisible] = useState<
    boolean
  >(false);

  const onKeyboardDidshow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidshow,
    );
    return () => {
      showSubscription.remove();
    };
  }, []);
  const onInputFocus = () => {
    setIsFocused(true);
  };
  const onInputFocusOut = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: '#fff',
          paddingVertical: isFocused
            ? (Dimensions.get('screen').height - keyboardHeight) / 6
            : Dimensions.get('screen').height / 4,
        }}
      >
        <Container>
          <View style={styles.textCardView}>
            <TextInput
              placeholder="질문을 입력해주세요."
              style={styles.textCardText}
              autoFocus={true}
              onFocus={(e: any) => {
                onInputFocus();
              }}
              onBlur={(e: any) => {
                onInputFocusOut();
              }}
            ></TextInput>
          </View>
        </Container>
      </ScrollView>
      <View
        style={[
          styles.buttonContainer,
          {paddingBottom: isFocused ? keyboardHeight + 10 : 30},
        ]}
      >
        <LineRoundButton
          buttonText={'전체 공개'}
          onPress={() => setPublicPushModalVisible(!publicPushModalVisible)}
        />
        <LineRoundButton
          buttonText={'그룹 공개'}
          onPress={() => setPrivatePushModalVisible(!privatePushModalVisible)}
        />
      </View>
      <ModalContainer
        modalVisible={publicPushModalVisible}
        setModalVisible={setPublicPushModalVisible}
        content={'전체에게 공유할 수 있는 질문 수는\n하루에 하나입니다.\n그래도 공유하시겠어요?'}
        firstButtonText={'공유하기'}
        firstButtonAction={() => console.log('공유하기')}
        secondButtonText={'나중에 하기'}
        secondButtonAction={() => console.log('나중에 하기')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textCardView: {
    justifyContent: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#D9D9D9',
  },
  textCardText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
