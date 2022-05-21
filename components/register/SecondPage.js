import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function SecondPage(props) {
  const { handleRadioInputChange, profile } = props;
  const [checkedCommunicate, setCheckedCommunicate] = useState('first');
  return (
    <View>
      <Text>กรุณากรอกข้อมูลต่อไปนี้</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          flexWrap: 'wrap',
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.square}>
            <RadioButton
              value='first'
              status={profile?.study === 'first' ? 'checked' : 'unchecked'}
              onPress={() => handleRadioInputChange('first', 'study')}
            />
          </View>
          <Text>ไม่ได้เรียน </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.square}>
            <RadioButton
              value='second'
              status={profile?.study === 'second' ? 'checked' : 'unchecked'}
              onPress={() => handleRadioInputChange('second', 'study')}
            />
          </View>
          <Text>ประถมศึกษา </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.square}>
            <RadioButton
              value='third'
              status={profile?.study === 'third' ? 'checked' : 'unchecked'}
              onPress={() => handleRadioInputChange('third', 'study')}
            />
          </View>
          <Text>สูงกว่าประถมศึกษา </Text>
        </View>
      </View>
      <Text>ปัญหาด้านการสื่อสาร</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          flexWrap: 'wrap',
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.square}>
            <RadioButton
              value='first'
              status={checkedCommunicate === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedCommunicate('first')}
            />
          </View>
          <Text>หู </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.square}>
            <RadioButton
              value='second'
              status={checkedCommunicate === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedCommunicate('second')}
            />
          </View>
          <Text>ตา </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.square}>
            <RadioButton
              value='third'
              status={checkedCommunicate === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedCommunicate('third')}
            />
          </View>
          <Text>อื่นๆ </Text>
        </View>
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
    margin: 6,
  },
});
