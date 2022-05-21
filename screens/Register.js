import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FocusedStatusBar } from '../components';
import FirstPage from '../components/register/FirstPage';
import { COLORS } from '../constants';
import { Button } from 'react-native-paper';
import SecondPage from '../components/register/SecondPage';
import _ from 'lodash';
import ThirdPage from '../components/register/ThirdPage';
import FirstQuestion from '../components/excitement/FirstQuestion';
import SecondQuestion from '../components/excitement/SecondQuestion';
import ThirdQuestion from '../components/excitement/ThirdQuestion';
import FourthQuestion from '../components/excitement/FourthQuestion';
import FifthQuestion from '../components/excitement/FifthQuestion';
import SixQuestion from '../components/excitement/SixQuestion';
import SevenQuestion from '../components/excitement/SevenQuestion';
import EightQuestion from '../components/excitement/EightQuestion';
import NineQuestion from '../components/excitement/NineQuestion';
import TenQuestion from '../components/excitement/TenQuestion';
import ElevenQuestion from '../components/excitement/ElevenQuestion';
import TwelveQuestion from '../components/excitement/TwelveQuestion';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RegisterScreen = ({ navigation }) => {
  let [page, setPage] = useState(0);
  const [profile, setProfile] = useState({});
  const [answer, setAnswer] = useState({});
  const [date, setDate] = useState(null);
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

  const storeData = async (value) => {
    value = value.toString();
    try {
      await AsyncStorage.setItem('@storage_Key', value);
      await AsyncStorage.setItem('@storage_Key1', profile.study);
    } catch (e) {
      // saving error
    }
  };

  const checkScore = (number) => {
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
      storeData(score);
    }
    navigation.navigate('Home');
  };
  const onClick = (type) => {
    let number = 0;

    if (type === 'back') {
      number = page - 1;
      setPage(number);
    } else {
      if (page === 14) {
        checkScore(number);
      } else {
        number = page + 1;
        setPage(number);
      }
    }
  };
  const handleRadioInputChange = (value, name) => {
    setProfile((prevState) => ({
      ...prevState,
      ..._.set(prevState, name, value),
    }));
  };

  const handleAnswerChange = (value, name) => {
    setAnswer((prevState) => ({
      ...prevState,
      ..._.set(prevState, name, value),
    }));
  };

  const handleInputChange = (value, name) => {
    setProfile((prevState) => ({
      ...prevState,
      ..._.set(prevState, name, value),
    }));
  };

  const handleSubmitForm = (data) => {
    setProfile((prevState) => ({
      ...prevState,
      ...data,
    }));
  };
  const showPage = () => {
    switch (page) {
      case 0:
        return (
          <FirstPage
            profile={profile}
            onSubmit={handleSubmitForm}
            handleInputChange={handleInputChange}
            handleRadioInputChange={handleRadioInputChange}
          />
        );
      case 1:
        return (
          <SecondPage
            profile={profile}
            onSubmit={handleSubmitForm}
            handleInputChange={handleInputChange}
            handleRadioInputChange={handleRadioInputChange}
          />
        );
      case 2:
        return <ThirdPage profile={profile} />;
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
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1, margin: 30, padding: 30 }}>
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
            // alignItems: 'space-between',
            margin: '10%',
          }}
        >
          {page !== 0 && (
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
export default function Register() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Registeres' component={RegisterScreen} />
      {/* <Stack.Screen name='Home' component={Home} /> */}
    </Stack.Navigator>
  );
}
