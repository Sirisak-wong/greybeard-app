import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function FourthQuestion(props) {
  const { answer, handleAnswerChange } = props;
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '100%', fontSize: 16 }}>
          4 การทดสอบสมาธิโดยคิดเลขในใจ (5คะแนน) (ให้เลือกทำข้อใดข้อหนึ่ง)
          โดยข้อนี้เป็นการคิดเลขในใจเพื่อทดสอบ สมาธิ
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
        <Text style={{ width: '100%', fontSize: 16 }}>
          4.1 ข้อนี้ให้คิดเลขในใจ
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
        <Text style={{ width: '45%' }}> 100 – 7 = </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.math1 || ''}
          onChangeText={(value) => handleAnswerChange(value, 'math1')}
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
        <Text style={{ width: '45%' }}> 93 – 7 = </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.math2 || ''}
          onChangeText={(value) => handleAnswerChange(value, 'math2')}
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
        <Text style={{ width: '45%' }}> 86 – 7 = </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.math3 || ''}
          onChangeText={(value) => handleAnswerChange(value, 'math3')}
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
        <Text style={{ width: '45%' }}> 79 – 7 = </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.math4 || ''}
          onChangeText={(value) => handleAnswerChange(value, 'math4')}
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
        <Text style={{ width: '45%' }}> 72 – 7 = </Text>
        <TextInput
          style={{ width: '50%', height: 40 }}
          value={answer?.math5 || ''}
          onChangeText={(value) => handleAnswerChange(value, 'math5')}
        />
      </View>
    </View>
  );
}
