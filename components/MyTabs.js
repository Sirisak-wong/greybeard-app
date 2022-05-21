import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Register from '../screens/Register';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      initialRouteName='Register'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Register'
        component={Register}
        options={{
          tabBarLabel: 'Register',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account-plus' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
