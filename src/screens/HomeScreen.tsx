import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Container} from '../components/Container';
import {LabelCardContainer} from '../components/LabelCardContainer';
import {getDailyQuestion, getHotQuestion} from '../common/questionApi';

type RootStackParamList = {
  QuestionScreen: {questionId: number; content: string};
};

type Props = NativeStackScreenProps<RootStackParamList>;
const HomeScreen = ({navigation}: any) => {
  const [hotQuestion, setHotQuestion] = useState<QuestionDto>();
  const [dailyQuestion, setDailyQuestion] = useState<QuestionDto>();

  const today = new Date();
  const todayDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  useEffect(function getResponse() {
    (async function getHotQuestionData() {
      const hotQuesitonData = await getHotQuestion(todayDate);
      setHotQuestion(hotQuesitonData.data);
    })();
  }, []);

  useEffect(function getResponse() {
    (async function getDailyQuestionData() {
      const dailyQuesitonData = await getDailyQuestion(todayDate);
      setDailyQuestion(dailyQuesitonData.data);
    })();
  }, []);

  return (
    <Container>
      <LabelCardContainer
        label={'오늘의 질문'}
        content={dailyQuestion?.content}
        cardBgColor={'#EE3E36'}
        cardHeight={'50%'}
        moveToScreen={() =>
          navigation.navigate('QuestionScreen', {
            questionId: dailyQuestion?.questionId,
            content: dailyQuestion?.content,
          })
        }
      />
      <View style={styles.divider} />
      <LabelCardContainer
        label={'HOT 질문'}
        content={hotQuestion?.content}
        cardBgColor={'#F6D500'}
        cardHeight={'25%'}
        moveToScreen={() =>
          navigation.navigate('QuestionScreen', {
            questionId: hotQuestion?.questionId,
            content: hotQuestion?.content,
          })
        }
      />
      <View style={styles.divider} />
      <View style={styles.twoCol}>
        <LabelCardContainer
          label={'Q'}
          content={'답변하기'}
          cardBgColor={'#6EACBA'}
          cardHeight={'100%'}
          cardWidth={'49%'}
          moveToScreen={() => navigation.navigate('QuestionListScreen')}
        />
        <View style={styles.divider} />
        <LabelCardContainer
          label={'Q'}
          content={'질문하기'}
          cardBgColor={'#4EA163'}
          cardHeight={'100%'}
          cardWidth={'49%'}
          moveToScreen={() => navigation.navigate('WriteQuestionScreen')}
        />
      </View>
    </Container>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  divider: {
    padding: 3,
  },
  twoCol: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
  },
});
