import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import SolveEquationPage from './pages/SolveEquationPage';
import CombustionAnalysisPage from './pages/CombustionAnalysisPage';
import SettingsPage from './pages/SettingsPage'
import HomePage from './pages/HomePage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Solve Equation' component={SolveEquationPage} />
        <Stack.Screen name='Combustion Analysis' component={CombustionAnalysisPage} />
        <Stack.Screen name='Settings' component={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
