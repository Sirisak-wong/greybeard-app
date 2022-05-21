import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function FifthQuestion(props) {
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
          4.2 ข้อนี้ จะสะกดคำว่ามะนาวให้ฟัง แล้วให้สะกดถอยหลัง
          จากพยัญชนะตัวหลังไปตัวแรก คำว่ามะนาวสะกดว่า
          มอม้า-สระอะ-นอหนู-สระอา-วอแหวน คุณตาคุณยายลองสะกดถอยหลังดูสิคะ
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
        <TextInput
          style={{ width: '90%', height: 40 }}
          value={answer?.manao || ''}
          onChangeText={(value) => handleAnswerChange(value, 'manao')}
        />
        <View style={{ height: 250 }}></View>
      </View>
    </View>
  );
}
