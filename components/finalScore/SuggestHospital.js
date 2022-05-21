import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import _ from 'lodash';

export default function SuggestHospital(props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>คลินิกหรือโรงพยาบาลที่แนะนำ</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginTop: 30,
        }}
      >
        <Text style={{ width: '100%', fontSize: 16 }}>การบริการ</Text>
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
          คลินิกความจำโรงพยาบาลรามาธิบดี ได้เปิดบริการเพื่อให้คำปรึกษาและ
          รักษาอาการเกี่ยวกับความจำและ การทำงานของสมองทุกวันพุธ เวลา 9.00 -
          12.00 น.{' '}
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
          สนใจเข้ารับคำปรึกษา หรือ สอบถามข้อมูลเพิ่มเติม ติดต่อได้ที่:{' '}
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
          หน่วยตรวจผู้ป่วยนอกจิตเวช คณะแพทยศาสตร์ รพ.รามาธิบดี ม หาวิทยาลัยมหิดล
          โทรศัพท์ 02-201-1235 (กรุณาติดต่อในเวลา 13.00-15.00น.){' '}
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
        <Text style={{ width: '100%' }}>แพทย์ผู้ดูแล</Text>
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
          1. รศ.นพ.จักรกฤษณ์ สุขยิ่ง 2. ผศ.พญ.ดาวชมพู นาคะวิโร 3. อ.พญ.ภาพันธ์
          ไทยพิสุทธิกุล{' '}
        </Text>
      </View>
    </View>
  );
}
