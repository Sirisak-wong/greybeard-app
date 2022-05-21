import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function ThirdPage(props) {
  const { profile } = props;
  return (
    <View>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          alignContent: 'center',
          flexWrap: 'wrap',
          marginTop: 10,
        }}
      >
        <View>
          {profile?.gender === 'male' ? (
            <Image
              style={styles.img}
              source={require('../../icon/uncle.png')}
            />
          ) : (
            <Image
              style={styles.img}
              source={require('../../icon/aunt.png')}
            />
          )}
        </View>
        <View style={{ marginRight: 4 }}>
          <Text style={{ fontSize: 18 }}>ชื่อ : {profile?.name}</Text>
          <Text style={{ fontSize: 18 }}>นามสกุล : {profile?.surname}</Text>
          <Text style={{ fontSize: 18 }}>เพศ : {profile?.gender}</Text>
          <Text style={{ fontSize: 18 }}>อายุ : {profile?.age}</Text>
          <Text style={{ fontSize: 18 }}>
            วัน/เดือน/ปีเกิด : {profile?.date && `${profile?.date}/`}
            {profile?.month && `${profile?.month}/`}
            {profile?.years}
          </Text>
          <Text style={{ fontSize: 18 }}>
            เบอร์โทรศัพท์ที่สามารถติดต่อได้ :
          </Text>
          <Text style={{ fontSize: 18 }}>{profile?.tels}</Text>
        </View>
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
  img: {
    height: 220,
    width: 220,
    justifyContent: 'center',
  },
});
