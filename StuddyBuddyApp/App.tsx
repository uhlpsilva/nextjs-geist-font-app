import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import QuestionSolverStack from './src/navigation/QuestionSolverStack';
import AnswerCheckerStack from './src/navigation/AnswerCheckerStack';
import HistoryScreen from './src/screens/HistoryScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="QuestionSolver">
        <Drawer.Screen name="QuestionSolver" component={QuestionSolverStack} options={{ title: 'Question Solver' }} />
        <Drawer.Screen name="AnswerChecker" component={AnswerCheckerStack} options={{ title: 'Answer Checker' }} />
        <Drawer.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
