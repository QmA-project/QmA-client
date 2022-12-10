import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PostItem} from '../../components/PostItem';
import {LabelPostItem} from '../../components/LabelPostItem';
import {Container} from '../../components/Container';
import {CardContainer} from '../../components/CardContainer';
import { getHotQuestion, getQuestionList } from '../../common/questionApi';

type RootStackParamList = {
  QuestionScreen: {questionId: number, content: string}
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Tab = createMaterialTopTabNavigator();

export const QuestionListScreen = ({navigation}: Props) => {
  const [questionList, setQuestionList] = useState<QuestionDto[]>([]);
  const [hotQuestion, setHotQuestion] = useState<QuestionDto>();

  useEffect(function getResponse() {
    (async function getQuestionListData() {
      const data = await getQuestionList();
      setQuestionList(data.data.questions);
    })();
  }, []);

  useEffect(function getResponse() {
    (async function getHotQuestionData() {
      let today = new Date();
      let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const hotQuesitonData = await getHotQuestion(todayDate);
      setHotQuestion(hotQuesitonData.data);
    })();
  }, []);

  const AllTypePostListFragment = () => (
    <>
      <LabelPostItem
        label={'HOT 질문'}
        content={hotQuestion?.content}
        numberOfAnswers={hotQuestion?.numOfAnswers}
        moveToScreen={() =>  navigation.navigate('QuestionScreen', { questionId :hotQuestion?.questionId, content: hotQuestion?.content })}
      />
      <FlatList
        style={{flex: 1, backgroundColor: '#FFFFFF'}}
        data={questionList}
        renderItem={question => (
          <PostItem
            key={question.item.questionId}
            content={question.item.content}
            numberOfAnswers={question.item.numOfAnswers}
            moveToScreen={() =>
              navigation.navigate('QuestionScreen', { questionId : question.item.questionId, content: question.item.content })
            }
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: '#F6F6F6'}}></View>
        )}
      />
    </>
  );

  const GroupTypePostListFragment = () => (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Container>
          <View style={styles.groupTitleView}>
            <View style={styles.groupColorCircle} />
            <Text>내 동기들</Text>
          </View>
          <CardContainer
            content={'학부 시절 중 가장 행복했을 때는?'}
            moveToScreen={() => console.log('해당 질문 페이지로 이동')}
          />
        </Container>
      </ScrollView>
    </>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // shadowColor: '#000',
          // shadowOffset: {width: 0, height: 5},
          // shadowRadius: 50,
          // margin: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 2,
          width: Dimensions.get('window').width / 3,
          bottom: 0,
          marginHorizontal: Dimensions.get('window').width / 12,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 14,
          marginBottom: 6,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#858585',
      }}
      keyboardDismissMode="on-drag"
      initialLayout={{width: Dimensions.get('window').width}}
    >
      <Tab.Screen name={`전체`} children={() => <AllTypePostListFragment />} />
      <Tab.Screen
        name={`그룹`}
        children={() => <GroupTypePostListFragment />}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  groupTitleView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  groupColorCircle: {
    backgroundColor: '#D45BFF',
    width: 15,
    height: 15,
    borderRadius: 15,
    marginRight: 5,
  },
});
