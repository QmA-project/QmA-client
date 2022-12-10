import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface Props {
  label: string;
  content: string;
  numberOfAnswers: number;
  moveToScreen: any;
}
export const LabelPostItem = ({
  label,
  content,
  numberOfAnswers,
  moveToScreen,
}: Props) => {
  return (
    <>
      <Pressable onPress={() => moveToScreen()}>
        <View style={styles.postView}>
          <View style={styles.contentView}>
            <Text style={styles.label}>{label}</Text>
            <Text
              style={styles.contentText}
              ellipsizeMode={'tail'}
              numberOfLines={2}
            >
              {content}
            </Text>
          </View>
          <Text style={styles.numText}>{numberOfAnswers}</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  postView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6D500',
    padding: 20,
    height: 100,
  },
  label: {
    fontWeight: 'bold',
  },
  contentView: {
    width: '80%',
  },
  contentText: {
    paddingTop: 5
  },
  numText: {
    fontSize: 20,
  },
});
