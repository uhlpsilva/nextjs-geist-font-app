import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnswerCheckerScreen from '../screens/AnswerChecker/AnswerCheckerScreen';

const Stack = createNativeStackNavigator();

export default function AnswerCheckerStack() {
  return (
    <Stack.Navigator initialRouteName="AnswerCheckerScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AnswerCheckerScreen" component={AnswerCheckerScreen} />
    </Stack.Navigator>
  );
}
