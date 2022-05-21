import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import _ from 'lodash';

export default function SummaryScore(props) {
  const { study, afterScore } = props;
  let text = '';
  let score = parseInt(afterScore);
  if (study === 'first') {
    if (score > 14) {
      text = 'ไม่มีความเสี่ยงของภาวะสมองเสื่อมจากเครื่องมือนี้ 1B1224';
    } else if (score === 14) {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ให้คําแนะนํา และรักษา B1225';
    } else {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ส่งไปรักษาต่อ B1226';
    }
  }
  if (study === 'second') {
    if (score > 17) {
      text = 'ไม่มีความเสี่ยงของภาวะสมองเสื่อมจากเครื่องมือนี้ 1B1224';
    } else if (score === 17) {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ให้คําแนะนํา และรักษา B1225';
    } else {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ส่งไปรักษาต่อ B1226';
    }
  }
  if (study === 'third') {
    if (score > 22) {
      text = 'ไม่มีความเสี่ยงของภาวะสมองเสื่อมจากเครื่องมือนี้ 1B1224';
    } else if (score === 22) {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ให้คําแนะนํา และรักษา B1225';
    } else {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ส่งไปรักษาต่อ B1226';
    }
  }
  if (study === null) {
    if (score > 22) {
      text = 'ไม่มีความเสี่ยงของภาวะสมองเสื่อมจากเครื่องมือนี้ 1B1224';
    } else if (score === 22) {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ให้คําแนะนํา และรักษา B1225';
    } else {
      text = 'สงสัยว่ามีภาวะสมองเสื่อม ส่งไปรักษาต่อ B1226';
    }
  }
  return (
    <View>
      <Card style={{ alignItems: 'center' }}>
        <Card.Content>
          <Title style={{ fontSize: 16 }}>การแปลผล :</Title>
          <Text style={{ fontSize: 14 }}>
            ถ้าคะแนนน้อยกว่าจุดตัด คือ “สงสัยว่ามีภาวะสมองเสื่อม (Cognitive
            Impairment)”
          </Text>
        </Card.Content>
      </Card>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 16, marginTop: 4, paddingTop: 10 }}>
          สรุปผลการพิจารณา :
        </Text>
      </View>

      <Card style={{ alignItems: 'center', marginTop: 10 }}>
        <Card.Content>
          <Title style={{ fontSize: 14, marginTop: 10 }}>{text}</Title>
        </Card.Content>
      </Card>
    </View>
  );
}
