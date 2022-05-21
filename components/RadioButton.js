import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

export default function RadioButton(props) {
  const { radioData } = props;
  let checked = 0;

  const radioRender = () => {
    return radioData.map((data, key) => {
      return (
        <View style={{ backgroundColor: 'black' }} key={key}>
          {checked == key ? (
            <TouchableOpacity style={styles.btn}>
              <Image
                style={styles.img}
                source={require('../icon/radioActive.png')}
              />
              <Text>{data}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                this.setState({ checked: key });
              }}
              style={styles.btn}
            >
              <Image style={styles.img} source={require('../icon/radio.png')} />
              <Text>{data}</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    });
  };

  return <View>{radioRender()}</View>;
}

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
  btn: {
    flexDirection: 'row',
  },
});
