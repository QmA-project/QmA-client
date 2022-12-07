import React from 'react'; 
import { View, Text, StyleSheet, Pressable, Dimensions} from 'react-native'; 

interface Props {
  buttonText: string,
  onPress: any;
}
export const LineRoundButton = ({ buttonText, onPress }: Props) => {
  
  return (
    <>
      <Pressable onPress={()=>onPress()} >
        <View style={styles.buttonView}>
          <Text style={styles.contentText}>{buttonText}</Text>
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    borderColor: '#D9D9D9',
    width: Dimensions.get('window').width / 2 - 10,
    height: 44,
    borderWidth: 1,
    borderRadius: 50,
  },
  contentText: {
    textAlign: 'center'
  }
})