import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import _ from 'lodash';
import { useState } from 'react';

export default function Second(props) {
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
          2.  “วันจักรี” อยู่ในเดือนใด
        </Text>
      </View>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15%' }}
      >
        <View style={styles.square}>
          <RadioButton
            value='first'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
        <Text>มิถุนายน</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='second'
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
        <Text>มีนาคม </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='third'
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
        <Text>พฤษภาคม </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.square}>
          <RadioButton
            value='fourth'
            status={checked === 'fourth' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('fourth')}
          />
        </View>
        <Text>เมษายน </Text>
      </View>
      <View style={{ height: 110 }}></View>
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
