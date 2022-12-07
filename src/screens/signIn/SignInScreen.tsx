import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Keyboard,
  KeyboardEvent,
  Platform,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CustomTextInput} from '../../components/TextInputContainer';

type RootStackParamList = {
  HomeScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const SignInScreen = ({navigation}: Props) => {
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
    <ScrollView
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      style={styles.container}
    >
      <View style={styles.formView}>
        <View style={styles.formContainer}>
          <CustomTextInput
            placeholder="아이디"
            onFocus={(e: any) => {
              onInputFocus();
            }}
            onBlur={(e: any) => {
              onInputFocusOut();
            }}
          />
          <CustomTextInput
            placeholder="비밀번호"
            onFocus={(e: any) => {
              onInputFocus();
            }}
            onBlur={(e: any) => {
              onInputFocusOut();
            }}
          />
        </View>
        <View
          style={[
            styles.formBtnView,
            {
              marginBottom:
                Platform.OS === 'ios' ? ( isFocused ? keyboardHeight : 20 ) : 0,
            },
          ]}
        >
          <Pressable
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.btn}
          >
            <Text style={styles.btnText}>로그인</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.signUpText}>회원가입</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    margin: 100,
    width: '80%',
  },
  formBtnView: {
    width: '80%',
  },
  btn: {
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#EE3E36',
  },
  btnText: {
    textAlign: 'center',
  },
  signUpText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 15,
  },
});
export default SignInScreen;
