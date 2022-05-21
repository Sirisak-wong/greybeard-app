import { View, Text, StyleSheet } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import _ from 'lodash';
import { useState } from 'react';

export default function ThirdQuestion(props) {
  const { handleAnswerChange, answer } = props;
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
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
          3.การทดสอบการบันทึกความจำ โดยให้จำชื่อของ 3 อย่าง (3
          คะแนน)ต่อไปนี้เป็นการทดสอบความจำ โดยจะบอกชื่อของสามอย่าง
          ให้ตั้งใจฟังและจะบอกเพียงครั้งเดียว เมื่อพูดจบ ให้พูดทบทวนตามที่ได้ยิน
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <Checkbox
            status={answer?.flower ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange(!answer?.flower , 'flower')}
          />
        </View>
        <Text>ดอกไม้</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
        <Checkbox
            status={answer?.river ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange(!answer?.river , 'river')}
          />
        </View>
        <Text>แม่น้ำ </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
        <Checkbox
            status={answer?.train ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange(!answer?.train , 'train')}
          />
        </View>
        <Text>รถไฟ </Text>
      </View>
      <View style={{ height : 140}}></View>
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
