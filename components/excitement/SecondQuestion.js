import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function SecondQuestion(props) {
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
          2 การทดสอบการรับรู้เกี่ยวกับที่อยู่ปัจจุบัน
          (5คะแนน)ให้เลือกทำข้อใดข้อหนึ่ง
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
        <Text style={{ width: '100%' }}>
          สถานที่ที่อยู่ตรงนี้เรียกว่าอะไร บ้านเลขที่เท่าไหร่ :{' '}
        </Text>
        <TextInput style={{ width: '100%', height: 40 }} />
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
        <Text style={{ width: '100%' }}>
          ที่นี่หมู่บ้านอะไร ชื่อหมู่บ้านอะไร :{' '}
        </Text>
        <TextInput style={{ width: '100%', height: 40 }} />
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
        <Text style={{ width: '100%' }}>
          ที่นี่อยู่ในอำเภออะไร หรือเขตอะไร :{' '}
        </Text>
        <TextInput style={{ width: '100%', height: 40 }} />
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
        <Text style={{ width: '45%' }}>ที่นี่จังหวัดอะไร : </Text>
        <TextInput style={{ width: '50%', height: 40 }} />
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
        <Text style={{ width: '45%' }}>ที่นี่ภาคอะไร : </Text>
        <TextInput style={{ width: '50%', height: 40 }} />
      </View>
    </View>
  );
}
