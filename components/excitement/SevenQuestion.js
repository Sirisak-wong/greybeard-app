import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function SevenQuestion(props) {
  const { handleAnswerChange, answer } = props;
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
          6 การทดสอบการบอกชื่อสิ่งของที่เห็น (2 คะแนน)
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
        <Text style={{ width: '100%' }}>
          6.1 ยื่นดินสอให้ผู้ทดสอบดู และถามว่าสิ่งของนี้คืออะไร
        </Text>
        <TextInput
          style={{ width: '100%', height: 40 }}
          value={answer?.pencil || ''}
          onChangeText={(value) => handleAnswerChange(value, 'pencil')}
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
        <Text style={{ width: '100%' }}>
          6.2 ชี้นาฬิกาข้อมือให้ผู้ทดสอบดู และถามว่า สิ่งของนี้คืออะไร
        </Text>
        <TextInput
          style={{ width: '100%', height: 40 }}
          value={answer?.watch || ''}
          onChangeText={(value) => handleAnswerChange(value, 'watch')}
        />
      </View>
      <View style={{ height: 150 }}></View>
    </View>
  );
}
