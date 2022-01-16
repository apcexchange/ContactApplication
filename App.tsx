import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text> hello world</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
