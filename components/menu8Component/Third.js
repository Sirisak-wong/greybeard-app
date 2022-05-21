import { View, Text, StyleSheet, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import _ from 'lodash';
import { useState } from 'react';

export default function Third(props) {
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
        <Text style={{ width: '100%', fontSize: 14, marginTop: 8 }}>
        3. ให้ผู้ทดสอบตอบว่าสีตัวอักษร ในข้อนี้มีสีอะไรบ้าง
        </Text>
        <Image
        style={{ marginLeft : '5%', marginTop : 20}}
        source={require('../../icon/eightMenu/3.png')}
      />
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <View style={styles.square}>
          <RadioButton
            value='first'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
        <Text>ชมพู และ  ฟ้า</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='second'
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
        <Text>ชมพู และ ดำ </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='third'
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
        <Text>ดำ และ ดำ </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='fourth'
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fourth')}
          />
        </View>
        <Text>ดำ และ ฟ้า </Text>
      </View>
      <View style={{ height: 35}}></View>
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
  img: {
    margin: 10
  }
});
