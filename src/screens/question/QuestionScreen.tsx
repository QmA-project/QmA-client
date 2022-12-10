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
  Dimensions,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RightArrowIcon from '../../icons/RightArrowIcon';

type RootStackParamList = {
 
};

type Props = NativeStackScreenProps<RootStackParamList>;
export const QuestionScreen = ({navigation, route}: Props) => {
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
            {route.params.content}
          </Text>
        </View>
        <View
          style={[
            styles.textInputView,
            {
              marginBottom:
                Platform.OS === 'ios' && isFocused ? keyboardHeight : 0,
            }]
          }
        >
          <TextInput
            placeholder="본인의 이야기를 입력하세요."
            placeholderTextColor={'#fff'}
            style={[styles.textInputText]}
            autoFocus={true}
            onFocus={(e: any) => {
              onInputFocus();
            }}
            onBlur={(e: any) => {
              onInputFocusOut();
            }}
          ></TextInput>
          <RightArrowIcon />
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
    alignItems: 'center',
  },
  textInputText: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    width: Dimensions.get('screen').width - 60,
    marginRight: 5,
    padding: 10,
  },
});
