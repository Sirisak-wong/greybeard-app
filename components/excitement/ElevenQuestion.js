import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function ElevenQuestion(props) {
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
          10 ทดสอบการเขียนภาษาอย่างมีความหมาย
          ข้อนี้เป็นคำสั่งให้คุณตาคุณยายเขียน ข้อความอะไรก็ได้
          ที่อ่านแล้วรู้สึกมี ความหมายมา1 ประโยค
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
        <Text style={{ width: '100%' }}> ประโยคความหมาย</Text>
        <View style={styles.square}>
          <Checkbox
            status={answer?.questionEleven ? 'checked' : 'unchecked'}
            onPress={() =>
              handleAnswerChange(!answer?.questionEleven, 'questionEleven')
            }
          />
        </View>
      </View>
      <View style={{ height: 220 }}></View>
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
