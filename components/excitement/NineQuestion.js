import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function NineQuestion(props) {
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
          8 ทดสอบการเข้าใจความหมายและ ทำตามคำสั่ง (3 คะแนน)
          ต่อไปจะส่งกระดาษให้คุณตาคุณยาย รับด้วยมือขวา
          พับครึ่งด้วยมือทั้งสองข้าง แล้ววางไว้ที่พื้น
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
        <Text style={{ width: '100%' }}>รับด้วยมือขวา</Text>
        <View style={styles.square}>
          <Checkbox
            status={answer?.questionNine1 ? 'checked' : 'unchecked'}
            onPress={() =>
              handleAnswerChange(!answer?.questionNine1, 'questionNine1')
            }
          />
        </View>
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
        <Text style={{ width: '100%' }}>พับครึ่ง</Text>
        <View style={styles.square}>
          <Checkbox
            status={answer?.questionNine2 ? 'checked' : 'unchecked'}
            onPress={() =>
              handleAnswerChange(!answer?.questionNine2, 'questionNine2')
            }
          />
        </View>
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
        <Text style={{ width: '100%' }}>วางไว้ที่พื้น</Text>
        <View style={styles.square}>
          <Checkbox
            status={answer?.questionNine3 ? 'checked' : 'unchecked'}
            onPress={() =>
              handleAnswerChange(!answer?.questionNine3, 'questionNine3')
            }
          />
        </View>
      </View>
      <View style={{ height: 40 }}></View>
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
