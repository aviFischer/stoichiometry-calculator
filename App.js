import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import BalanceEquationPage from './pages/BalanceEquationPage';
import SolveEquationPage from './pages/SolveEquationPage'
import CombustionAnalysisPage from './pages/CombustionAnalysisPage';
import CalculateMolarMassPage from './pages/CalculateMolarMassPage'
import HomePage from './pages/HomePage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Balance Equation' component={BalanceEquationPage} />
        <Stack.Screen name='Solve Equation' component={SolveEquationPage} />
        <Stack.Screen name='Combustion Analysis' component={CombustionAnalysisPage} />
        <Stack.Screen name='Calculate Molar Mass' component={CalculateMolarMassPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
export default function App() {
  return(
    <Text>hello, world</Text>
  )
}*/