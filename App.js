import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SolveEquationPage from './pages/SolveEquationPage';

export default function App() {
  return (
    <SolveEquationPage>
    </SolveEquationPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
