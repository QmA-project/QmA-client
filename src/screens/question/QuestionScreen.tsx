import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardEvent,
  Platform,
} from 'react-native';
interface Props {}
export const QuestionScreen = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        style={styles.container}
      >
        <View style={styles.contentView}>
          <Text style={styles.contentText}>
            다시 돌아가도 그만큼은 못하겠다{`\n`}
            가장 열정을 쏟은 순간은 언제인가요?
          </Text>
        </View>
        <View style={styles.textInputView}>
          <TextInput
            placeholder="본인의 이야기를 입력하세요."
            placeholderTextColor={'#fff'}
            style={[
              styles.textInputText,
              {
                marginBottom:
                  Platform.OS === 'ios' && isFocused ? keyboardHeight : 0,
              },
            ]}
            autoFocus={true}
            onFocus={(e: any) => {
              onInputFocus();
            }}
            onBlur={(e: any) => {
              onInputFocusOut();
            }}
          ></TextInput>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#3C61C1',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
  },
  contentText: {
    textAlign: 'center',
  },
  textInputView: {
    flexDirection: 'row',
  },
  textInputText: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
  },
});
