import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { FocusedStatusBar } from '../components';
import { COLORS } from '../constants';
import { createStackNavigator } from '@react-navigation/stack';
import Menu1 from './menuScreens/Menu1';
import Menu2 from './menuScreens/Menu2';
import Menu3 from './menuScreens/Menu3';
import Menu4 from './menuScreens/Menu4';
import Menu5 from './menuScreens/Menu5';
import Menu6 from './menuScreens/Menu6';
import Menu7 from './menuScreens/Menu7';
import Menu8 from './menuScreens/Menu8';
import Menu9 from './menuScreens/Menu9';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.pink} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <View>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu1')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/color-palette.png')}
              />
              <Text style={{ marginTop: 5 }}>จดจำสี</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu4')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/vegetable.png')}
              />
              <Text style={{ marginTop: 5 }}>ข้อใดต่างจากพวก</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu7')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/calculate.png')}
              />
              <Text style={{ marginTop: 5 }}>นับจำนวนตามภาพ</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu2')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/earth.png')}
              />
              <Text style={{ marginTop: 5 }}>ภูมิภาคในประเทศ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu5')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/calculator-icon.png')}
              />
              <Text style={{ marginTop: 5 }}>การคำนวณ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu8')}
            >
              <Image style={styles.img} source={require('.././icon/ABC.png')} />
              <Text style={{ marginTop: 5 }}>แยกสีตัวอักษร</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginRight: 10 }}>
          <View>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu3')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/Rectangle.png')}
              />
              <Text style={{ marginTop: 5 }}>เลขาคณิต</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu6')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/calendar.png')}
              />
              <Text style={{ marginTop: 5 }}>วันสำคัญต่างๆ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subLayout}
              onPress={() => navigation.navigate('Menu9')}
            >
              <Image
                style={styles.img}
                source={require('.././icon/picture.png')}
              />
              <Text style={{ marginTop: 5 }}>จับผิดภาพ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Homes' component={HomeScreen} />
      <Stack.Screen name='Menu1' component={Menu1} />
      <Stack.Screen name='Menu2' component={Menu2} />
      <Stack.Screen name='Menu3' component={Menu3} />
      <Stack.Screen name='Menu4' component={Menu4} />
      <Stack.Screen name='Menu5' component={Menu5} />
      <Stack.Screen name='Menu6' component={Menu6} />
      <Stack.Screen name='Menu7' component={Menu7} />
      <Stack.Screen name='Menu8' component={Menu8} />
      <Stack.Screen name='Menu9' component={Menu9} />
    </Stack.Navigator>
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
    height: 64,
    width: 64,
    justifyContent: 'center',
  },
  subLayout: {
    marginBottom: 70,
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
