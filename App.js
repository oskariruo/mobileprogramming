import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Calculator from './assignments/assignment1';
import GuessingGame from './assignments/assignment2';
import MemoryCalculator from './assignments/assignment3';
import ShoppingList from './assignments/assignment4';
import Home from './components/Home';
import Calculator5 from './assignments/assignment5/calculator';
import History5 from './assignments/assignment5/history';
import RecipeFinder from './assignments/assignment6';
import Converter from './assignments/assignment7';
import Map from './assignments/assignment8';
import ModifiedMap from './assignments/assignment10';

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
        <Stack.Screen name='Assignment 5' component={Calculator5}/>
        <Stack.Screen name='History' component={History5}/>
        <Stack.Screen name='Assignment 6' component={RecipeFinder}/>
        <Stack.Screen name='Assignment 7' component={Converter}/>
        <Stack.Screen name='Assignment 8' component={Map}/>
        <Stack.Screen name='Assignment 10' component={ModifiedMap}/>
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
