import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './src/Navigator/BottomNavigate'
import { createStackNavigator } from '@react-navigation/stack';
// import TextInputOperation from './src/Screen/Home';
// import TextInputProduction from './src/Screen/Data';
import { AppProvider } from './AppContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={BottomNavigation} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;