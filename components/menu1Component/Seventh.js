import { View, Text, StyleSheet, Image } from 'react-native';
import _ from 'lodash';

export default function Seventh(props) {
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Text style={{ width: '100%', fontSize: 14 }}>จดจำสี</Text>
      </View>
      <Image
        style={styles.img}
        source={require('../../icon/firstMenu/question3.png')}
      />
      <Text style={{ width: '100%', fontSize: 14 }}>
        จงจำรูปภาพต่อไปนี้ เพื่อนำไปตอบคำถาม
      </Text>
      <View style={{ height : 150}}></View>
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
    margin: '10%',
    height: 138,
    width: 196,
    justifyContent: 'center',
  },
});
