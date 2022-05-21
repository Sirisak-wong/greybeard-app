import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import _ from 'lodash';

export default function EightQuestion(props) {
  const { handleAnswerChange, answer } = props;
  return (
    <View>
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
          7 การทดสอบการพูดซ้ำ คำที่ได้ยิน (1คะแนน) ตั้งใจฟังนะคะ
          เมื่อพูดข้อความนี้ แล้วให้คุณตาคุณยายพูดตาม โดยจะบอกเพียงครั้งเดียว
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ width: '100%', marginTop: 20 }}>"ใครใครขายไข่ไก่"</Text>
      </View>
        <View style={styles.square}>
          <Checkbox
            status={answer?.questionEight ? 'checked' : 'unchecked'}
            onPress={() =>
              handleAnswerChange(!answer?.questionEight, 'questionEight')
            }
          />
        </View>
      <View style={{ height: 190 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7CA1B4',
    flex: 1,
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
    flexDirection: 'row',
  },
  square: {
    borderWidth: 1,
    borderColor: 'black',
    width: 40,
    height: 40,
    margin: 4,
  },
});
