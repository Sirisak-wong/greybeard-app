import { View, Text, StyleSheet, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import _ from 'lodash';
import { useState } from 'react';

export default function First(props) {
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
        <Text style={{ width: '100%', fontSize: 14, marginTop: 16 }}>
          2. ภาพต่อไปนี้มีกี่มุม
        </Text>
        <Image
        style={{ marginLeft : '30%', marginTop : 20}}
        source={require('../../icon/thirdMenu/2.png')}
      />
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: '10%' }}
      >
        <View style={styles.square}>
          <RadioButton
            value='first'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
        <Text>7 เหลี่ยม</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='second'
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
        <Text>5 เหลี่ยม </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='third'
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
        <Text>8 เหลี่ยม </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='fourth'
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fourth')}
          />
        </View>
        <Text>4 เหลี่ยม </Text>
      </View>
      <View style={{ height : 10}}></View>
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
