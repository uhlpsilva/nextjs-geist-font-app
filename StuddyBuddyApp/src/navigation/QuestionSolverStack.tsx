import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/QuestionSolver/Screen1';
import Screen2 from '../screens/QuestionSolver/Screen2';
import Screen3 from '../screens/QuestionSolver/Screen3';
import Screen4 from '../screens/QuestionSolver/Screen4';
import Screen5 from '../screens/QuestionSolver/Screen5';
import Screen6 from '../screens/QuestionSolver/Screen6';

const Stack = createNativeStackNavigator();

export default function QuestionSolverStack() {
  return (
    <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      <Stack.Screen name="Screen5" component={Screen5} />
      <Stack.Screen name="Screen6" component={Screen6} />
    </Stack.Navigator>
  );
}
