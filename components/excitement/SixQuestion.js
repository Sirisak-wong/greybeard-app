import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import _ from 'lodash';
import { useState } from 'react';

export default function SixQuestion(props) {
  const { answer, handleAnswerChange } = props;

  const [checked, setChecked] = useState('first');
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Text style={{ width: '100%', fontSize: 14 }}>
          5 ทดสอบความจำระยะสั้นของสิ่งของ 3อย่าง ที่ให้จำไว้แล้ว (3 คะแนน)
          เมื่อสักครู่ที่ให้จำของ 3 อย่าง จำได้ไหมมีอะไรบ้าง
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <Checkbox
            status={answer?.flowers ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange(!answer?.flowers, 'flowers')}
          />
        </View>
        <Text>ดอกไม้</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <Checkbox
            status={answer?.rivers ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange(!answer?.rivers, 'rivers')}
          />
        </View>
        <Text>แม่น้ำ </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <Checkbox
            status={answer?.trains ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange(!answer?.trains, 'trains')}
          />
        </View>
        <Text>รถไฟ </Text>
      </View>
      <View style={{ height: 165 }}></View>
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
    margin: 6,
  },
});
