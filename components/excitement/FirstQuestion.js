import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function FirstQuestion(props) {
  const { answer, handleAnswerChange } = props;

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>แบบทดสอบสมองเบื้องต้น</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 30,
        }}
      >
        <Text style={{ width: '100%', fontSize: 16 }}>
          1 การทดสอบการรับรู้เกี่ยวกับ เวลาปัจจุบัน (5 คะแนน)
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '45%' }}>วันนี้วันที่เท่าไหร่ : </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.date || ''}
          onChangeText={(value) => handleAnswerChange(value, 'date')}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '45%' }}>วันนี้วันอะไร : </Text>
        <TextInput style={{ width: '50%', height: 40 }} />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '45%' }}>เดือนนี้เดือนอะไร : </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.month || ''}
          onChangeText={(value) => handleAnswerChange(value, 'month')}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '45%' }}>ปีนี้ปีอะไร : </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.year || ''}
          onChangeText={(value) => handleAnswerChange(value, 'year')}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '45%' }}>ฤดูนี้ ฤดูอะไร : </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.season || ''}
          onChangeText={(value) => handleAnswerChange(value, 'season')}
        />
      </View>
    </View>
  );
}
