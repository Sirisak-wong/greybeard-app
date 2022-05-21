import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import Register from './screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import MyTabs from './components/MyTabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#E19898',
  },
};

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      
      {/* <Register /> */}
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Register'
      >
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} /> */}
        {/* <Stack.Screen name='Home' component={MyTabs} /> */}
        {/* <Stack.Screen name='Details' component={Details} /> */}
      {/* </Stack.Navigator> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
