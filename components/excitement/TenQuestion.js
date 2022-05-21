import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import { Checkbox } from 'react-native-paper';

export default function TenQuestion(props) {
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
          9 ทดสอบการอ่าน การเข้าใจความหมาย สามารถทำตามได้ (1 คะแนน)
          ต่อไปนี้จะแสดงคำสั่ง ที่เขียนว่า “หลับตา” แล้วให้คุณตาคุณยายปฎิบัติตาม
          (ห้ามอ่านให้คุณตาคุณยายฟัง)
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
        <Text style={{ width: '100%', marginTop : 40 }}> หลับตาได้ </Text>
        <View style={styles.square}>
          <Checkbox
            status={answer?.questionTen ? 'checked' : 'unchecked'}
            onPress={() =>
              handleAnswerChange(!answer?.questionTen, 'questionTen')
            }
          />
        </View>
      </View>

      <View style={{ height: 150 }}></View>
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
