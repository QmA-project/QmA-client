import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 

interface Props {
  content: string,
  moveToScreen: any;
}
export const CardContainer = ({ content, moveToScreen}: Props) => {
  
  return (
    <>
      <Pressable onPress={()=>moveToScreen()}>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#D9D9D9', // TODO: 임시색임으로 변경해야함
    padding: 20,
    height: 100,
  },
  contentText: {
    textAlign: 'center'
  }
})