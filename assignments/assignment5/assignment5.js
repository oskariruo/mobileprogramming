import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Calculator5 from './calculator';
import History5 from './history';


export default function Calc() {
  
  
  const Stack =createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen name='Calculator' component={Calculator5}/>
        <Stack.Screen name='History' component={History5}/>
      </Stack.Navigator>
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
