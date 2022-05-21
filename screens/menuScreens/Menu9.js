import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import { COLORS } from '../../constants';
import { Button } from 'react-native-paper';
import _ from 'lodash';
import { createStackNavigator } from '@react-navigation/stack';
import { FocusedStatusBar } from '../../components';
import First from '../../components/menu9Component/First';
import Second from '../../components/menu9Component/Second';
import Third from '../../components/menu9Component/Third';
import FirstQuestion from '../../components/excitement/FirstQuestion';
import SecondQuestion from '../../components/excitement/SecondQuestion';
import ThirdQuestion from '../../components/excitement/ThirdQuestion';
import FourthQuestion from '../../components/excitement/FourthQuestion';
import FifthQuestion from '../../components/excitement/FifthQuestion';
import SixQuestion from '../../components/excitement/SixQuestion';
import SevenQuestion from '../../components/excitement/SevenQuestion';
import EightQuestion from '../../components/excitement/EightQuestion';
import NineQuestion from '../../components/excitement/NineQuestion';
import TenQuestion from '../../components/excitement/TenQuestion';
import ElevenQuestion from '../../components/excitement/ElevenQuestion';
import TwelveQuestion from '../../components/excitement/TwelveQuestion';
import SuggestHospital from '../../components/finalScore/SuggestHospital';
import ScorePage from '../../components/finalScore/ScorePage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SummaryScore from '../../components/finalScore/SummaryScore';

const Stack = createStackNavigator();

const Menu9Screen = ({ navigation }) => {
  let [page, setPage] = useState(0);
  const [date, setDate] = useState(null);
  const [answer, setAnswer] = useState({});
  const [afterScore, setAfterScore] = useState(0);
  const [previousScore, setPreviousScore] = useState('');
  const [study, setStudy] = useState('');
  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    setDate(date);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      const value1 = await AsyncStorage.getItem('@storage_Key1');
      if (value !== null) {
        setPreviousScore(value);
        setStudy(value1);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  const handleAnswerChange = (value, name) => {
    setAnswer((prevState) => ({
      ...prevState,
      ..._.set(prevState, name, value),
    }));
  };
  const checkScore = (number) => {
    number = page + 1;
    setPage(number);
    let score = 5;
    if (page === 14) {
      if (answer?.date === date?.split('-')[2]) {
        score++;
      }
      if (answer?.month === date?.split('-')[1]) {
        score++;
      }
      if (answer?.year === date?.split('-')[0]) {
        score++;
      }
      if (answer?.season === 'ฝน') {
        score++;
      }
      if (answer?.flower) {
        score++;
      }
      if (answer?.river) {
        score++;
      }
      if (answer?.train) {
        score++;
      }
      if (answer?.math1 === '93') {
        score++;
      }
      if (answer?.math2 === '86') {
        score++;
      }
      if (answer?.math3 === '79') {
        score++;
      }
      if (answer?.math4 === '72') {
        score++;
      }
      if (answer?.math5 === '65') {
        score++;
      }
      if (answer?.manao === 'วานะม') {
        score++;
      }
      if (answer?.pencil === 'ดินสอ') {
        score++;
      }
      if (answer?.watch === 'นาฬิกาข้อมือ') {
        score++;
      }
      if (answer?.rectangle === 'first') {
        score++;
      }
      if (answer?.questionEight) {
        score++;
      }
      if (answer?.questionNine1) {
        score++;
      }
      if (answer?.questionNine2) {
        score++;
      }
      if (answer?.questionNine3) {
        score++;
      }
      if (answer?.questionTen) {
        score++;
      }
      if (answer?.questionEleven) {
        score++;
      }
      setAfterScore(score);
    }
  };

  const onClick = (type) => {
    let number = 0;

    if (type === 'back') {
      number = page - 1;
      setPage(number);
    } else {
      if (page === 17) {
        navigation.goBack();
      } else {
        checkScore(number);
      }
    }
  };

  const showPage = () => {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      case 3:
        return (
          <FirstQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 4:
        return <SecondQuestion />;
      case 5:
        return (
          <ThirdQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 6:
        return (
          <FourthQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 7:
        return (
          <FifthQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 8:
        return (
          <SixQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 9:
        return (
          <SevenQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 10:
        return (
          <EightQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 11:
        return (
          <NineQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 12:
        return (
          <TenQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 13:
        return (
          <ElevenQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 14:
        return (
          <TwelveQuestion
            answer={answer}
            handleAnswerChange={handleAnswerChange}
          />
        );
      case 15:
        return <SuggestHospital />;
      case 16:
        return (
          <ScorePage previousScore={previousScore} afterScore={afterScore} />
        );
      case 17:
        return (
          <SummaryScore study={study} afterScore={afterScore} />
        );
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      {page === 0 && (
        <Text
          style={{
            width: '100%',
            fontSize: 14,
            marginLeft: 30,
            paddingTop: 15,
          }}
        >
          จับผิดภาพ
        </Text>
      )}
      <View
        style={
          page === 0
            ? {
                flex: 1,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 15,
                marginTop: 15,
                padding: 20,
              }
            : {
                flex: 1,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 30,
                marginTop: 45,
                padding: 20,
              }
        }
      >
        <View style={{ zIndex: 0 }}>{showPage()}</View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 500,
              backgroundColor: 'white',
              borderRadius: 40,
            }}
          />
          <View style={{ flex: 1, backgroundColor: '#E19898' }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            margin: '10%',
          }}
        >
          {page !== 0 && page < 3 && (
            <Button
              icon='arrow-left'
              mode='outlined'
              onPress={() => onClick('back')}
              style={{ width: 100, fontSize: 14, marginRight: 16 }}
            >
              Back
            </Button>
          )}
          <Button
            icon='arrow-right'
            mode='outlined'
            onPress={() => onClick('next')}
            style={{ width: 100, fontSize: 14 }}
          >
            Next
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default function Menu9() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Menu9Screen' component={Menu9Screen} />
    </Stack.Navigator>
  );
}
