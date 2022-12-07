import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { Container } from '../components/Container';
import { LabelCardContainer } from '../components/LabelCardContainer';

const dummyData = [
  {
    label: '오늘의 질문',
    content: '다시 돌아가도 그만큼은 못하겠다!\n가장 열정을 쏟은 순간은 언제인가요?',
    cardBgColor: '#EE3E36',
    cardHeight: '50%'
  },
    {
    label: 'HOT 질문',
    content: '순간이 기억 남는 노래가 있나요?',
    cardBgColor: '#F6D500',
    cardHeight: '25%'
  },
]
const HomeScreen = ({ navigation }: any) => { 
	return ( 
    <Container>
      {dummyData.map((data, index) => (<LabelCardContainer key={index} label={data.label} content={data.content} cardBgColor={data.cardBgColor} cardHeight={data.cardHeight} moveToScreen={()=>navigation.navigate('QuestionScreen')} />))}
      <View style={styles.twoCol}>
        <LabelCardContainer label={'Q'} content={'답변하기'} cardBgColor={'#6EACBA'} cardHeight={'100%'} cardWidth={'50%'} moveToScreen={()=>navigation.navigate('QuestionListScreen')}/>
        <LabelCardContainer label={'Q'} content={'질문하기'} cardBgColor={'#4EA163'} cardHeight={'100%'} cardWidth={'50%'} moveToScreen={()=>navigation.navigate('WriteQuestionScreen')}/>
      </View>
    </Container>
  )
} 
export default HomeScreen;

const styles = StyleSheet.create({
  twoCol: {
    flexDirection: 'row',
    width: '100%',
    height: '20%'
 }
})