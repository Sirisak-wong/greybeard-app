import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import _ from 'lodash';

export default function ScorePage(props) {
  const { previousScore,afterScore } = props;
  return (
    <View>
      <Card style={{ alignItems: 'center' }}>
        <Card.Content>
          <Title style={{ fontSize: 30 }}>ผลคะแนน</Title>
        </Card.Content>
      </Card>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30, marginTop: 4, paddingTop: 10 }}>
          ก่อนการทดสอบ
        </Text>
      </View>

      <Card style={{ alignItems: 'center', marginTop: 10 }}>
        <Card.Content>
          <Title style={{ fontSize: 30, marginTop: 10 }}>{previousScore || '0'}</Title>
        </Card.Content>
      </Card>

      <View style={{ alignItems: 'center', marginTop: 4 }}>
        <Text style={{ fontSize: 30, paddingTop: 10 }}>หลังการทดสอบ</Text>
      </View>

      <Card style={{ alignItems: 'center', marginTop: 10 }}>
        <Card.Content>
          <Title style={{ fontSize: 30, marginTop: 10 }}>{afterScore}</Title>
        </Card.Content>
      </Card>
    </View>
  );
}
