import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 

interface Props {
  content: string,
  numberOfAnswers: number,
  moveToScreen: any,
}
export const PostItem = ({ content, numberOfAnswers, moveToScreen}: Props) => {
  
  return (
    <>
      <Pressable onPress={()=>moveToScreen()} >
        <View style={styles.contentView}>
          <Text style={styles.contentText} ellipsizeMode={'tail'} numberOfLines={2}>{content}</Text>
          <Text style={styles.numText}>{numberOfAnswers}</Text>
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold'
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 100,
  },
  contentText: {
    width: '80%',
  },
  numText: {
    fontSize: 20
  }
})