import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MyTabs from './components/MyTabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#E19898',
  },
};


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
