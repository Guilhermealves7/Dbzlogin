import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Rotas from './src/Rotas';
import {StatusBar} from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  
      backgroundColor='#ffa500' barStyle='light-content'
      />
      <Rotas></Rotas>
    </NavigationContainer>
  );
}

