import { View, Text, StyleSheet } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import _ from 'lodash';

export default function FirstPage(props) {
  const { handleInputChange, handleRadioInputChange, profile } = props;

  return (
    <View>
      <Text style={{ fontSize: 18 }}>กรุณากรอกข้อมูลต่อไปนี้</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 30,
        }}
      >
        <Text style={{ width: '25%' }}>ชื่อ : </Text>
        <TextInput
          value={profile?.name || ''}
          onChangeText={(value) => handleInputChange(value, 'name')}
          style={{ width: '70%', height: 40 }}
        />
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
        <Text style={{ width: '25%' }}>นามสกุล : </Text>
        <TextInput
          style={{ width: '70%', height: 40 }}
          value={profile?.surname || ''}
          onChangeText={(value) => handleInputChange(value, 'surname')}
        />
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
        <Text style={{ width: '25%' }}>อายุ : </Text>
        <TextInput
          style={{ width: '70%', height: 40 }}
          value={profile?.age || ''}
          onChangeText={(value) => handleInputChange(value, 'age')}
        />
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
        <View style={{ width: '25%' }}>
          <Text>เพศ : </Text>
        </View>
        <View>
          <Text>ชาย</Text>
        </View>
        <View style={styles.square}>
          <RadioButton
            status={profile?.gender === 'male' ? 'checked' : 'unchecked'}
            value='male'
            onPress={() => handleRadioInputChange('male', 'gender')}
          />
        </View>
        <View>
          <Text>หญิง</Text>
        </View>
        <View style={styles.square}>
          <RadioButton
            status={profile?.gender === 'female' ? 'checked' : 'unchecked'}
            value='female'
            onPress={() => handleRadioInputChange('female', 'gender')}
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
        <View style={{ marginRight: 4 }}>
          <Text>วัน</Text>
        </View>
        <View style={{ marginRight: 4 }}>
          <TextInput
            style={{ width: 50, height: 40 }}
            value={profile?.date || ''}
            onChangeText={(value) => handleInputChange(value, 'date')}
          />
        </View>
        <View style={{ marginRight: 4 }}>
          <Text>เดือน</Text>
        </View>
        <View style={{ marginRight: 4 }}>
          <TextInput
            style={{ width: 50, height: 40 }}
            value={profile?.month || ''}
            onChangeText={(value) => handleInputChange(value, 'month')}
          />
        </View>
        <View style={{ marginRight: 4 }}>
          <Text>ปี</Text>
        </View>
        <View>
          <TextInput
            style={{ width: 65, height: 40 }}
            value={profile?.years || ''}
            onChangeText={(value) => handleInputChange(value, 'years')}
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
        <Text style={{ width: '25%' }}>โทรศัพท์ : </Text>
        <TextInput
          style={{ width: '70%', height: 40 }}
          value={profile?.tels || ''}
          onChangeText={(value) => handleInputChange(value, 'tels')}
        />
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
