import React from 'react';
import {Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

function Next({navigation}) {
  return (
    <Button title="Next" onPress={() => navigation.navigate('FocusTest')} />
  );
}

function FocusTest() {
  return <TextInput style={{backgroundColor: 'blue'}} />;
}

export default function Main() {
  const screenOptions = {
    animationEnabled: false,
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Next"
        screenOptions={screenOptions}>
        <RootStack.Screen name="Next" component={Next} />
        <RootStack.Screen name="FocusTest" component={FocusTest} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
