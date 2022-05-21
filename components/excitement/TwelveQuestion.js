import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function TwelveQuestion(props) {
  const { handleAnswerChange, answer } = props;
  const [checked, setChecked] = useState('');
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
          11 ทดสอบความสัมพันธ์ระหว่างตากับมือ (1 คะแนน) ข้อนี้เป็นคำสั่ง
          จงเลือกภาพที่ตรงกันข้ามกับภาพ ตัวอย่าง
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Image style={styles.img} source={require('../../icon/reg.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <View style={styles.square}>
          <RadioButton
            value='first'
            status={answer.rectangle === 'first' ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange('first' , 'rectangle')}
          />
        </View>
        <Image style={styles.img} source={require('../../icon/reg1.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <View style={styles.square}>
          <RadioButton
            value='second'
            status={answer.rectangle === 'second' ? 'checked' : 'unchecked'}
            onPress={() => handleAnswerChange('second' , 'rectangle')}
          />
        </View>
        <Image style={styles.img} source={require('../../icon/reg2.png')} />
      </View>
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
    margin: 10,
  },
  img: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    margin: 10,
  },
});
