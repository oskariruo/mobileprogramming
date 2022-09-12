import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Calculator from './assignments/assignment1';
import GuessingGame from './assignments/assignment2';
import MemoryCalculator from './assignments/assignment3';
import ShoppingList from './assignments/assignment4';
import Home from './components/Home';

export default function App() {
  
  
  const Stack =createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Assignment 1' component={Calculator}/>
        <Stack.Screen name='Assignment 2' component={GuessingGame}/>
        <Stack.Screen name='Assignment 3' component={MemoryCalculator}/>
        <Stack.Screen name='Assignment 4' component={ShoppingList}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
