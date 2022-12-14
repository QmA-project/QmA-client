import React from 'react'; 
import { View, Text, StyleSheet, Pressable} from 'react-native'; 

interface Props {
  label: string,
  content: string,
  cardBgColor: string,
  cardHeight: string,
  cardWidth?: string,
  moveToScreen: any;
}
export const LabelCardContainer = ({ label, content, cardBgColor, cardHeight, cardWidth = '100%', moveToScreen}: Props) => {
  
  return (
    <>
      <Pressable onPress={() => moveToScreen()} style={{ backgroundColor: (cardBgColor), height: (cardHeight), width: (cardWidth) }} >
        <Text style={styles.label}>{label}</Text>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentText: {
    textAlign: 'center'
  }
})