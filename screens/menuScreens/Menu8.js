import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import { COLORS } from '../../constants';
import { Button } from 'react-native-paper';
import _ from 'lodash';
import { createStackNavigator } from '@react-navigation/stack';
import { FocusedStatusBar } from '../../components';
import First from '../../components/menu8Component/First';
import Second from '../../components/menu8Component/Second';
import Third from '../../components/menu8Component/Third';
import Fourth from '../../components/menu8Component/Fourth';

const Stack = createStackNavigator();

const Menu8Screen = ({ navigation }) => {
  let [page, setPage] = useState(0);

  const onClick = (type) => {
    let number = 0;

    if (type === 'back') {
      number = page - 1;
      setPage(number);
    } else {
      if (page === 3) {
        navigation.goBack();
      } else {
        number = page + 1;
        setPage(number);
      }
    }
  };

  const showPage = () => {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />;
      case 2:
        return <Third />;
      case 3:
        return <Fourth />;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      {page === 0 && (
        <Text
          style={{
            width: '100%',
            fontSize: 14,
            marginLeft: 30,
            paddingTop: 15,
          }}
        >
          แยกสีตัวอักษร
        </Text>
      )}
      <View
        style={
          page === 0
            ? {
                flex: 1,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 30,
                marginTop: 15,
                padding: 30,
              }
            : {
                flex: 1,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 30,
                marginTop: 45,
                padding: 30,
              }
        }
      >
        <View style={{ zIndex: 0 }}>{showPage()}</View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 500,
              backgroundColor: 'white',
              borderRadius: 40,
            }}
          />
          <View style={{ flex: 1, backgroundColor: '#E19898' }} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            margin: '10%',
          }}
        >
          {page !== 0 && (
            <Button
              icon='arrow-left'
              mode='outlined'
              onPress={() => onClick('back')}
              style={{ width: 100, fontSize: 14, marginRight: 16 }}
            >
              Back
            </Button>
          )}
          <Button
            icon='arrow-right'
            mode='outlined'
            onPress={() => onClick('next')}
            style={{ width: 100, fontSize: 14 }}
          >
            Next
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default function Menu8() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Menu8Screen' component={Menu8Screen} />
    </Stack.Navigator>
  );
}
