import React from 'react';
import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';

import pantalla1 from './src/pantalla1';
import pantalla2 from './src/pantalla2';
import pantalla3 from './src/pantalla3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={pantalla1} />
        <Stack.Screen name="About" component={pantalla2} />
        <Stack.Screen name="Contact" component={pantalla3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


