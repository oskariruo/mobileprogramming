import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Calculator({navigation}) {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [answer, setAnswer] = useState('');

  const sum = () => {
    setAnswer(parseInt(numberOne) + parseInt(numberTwo))
  }

  const minus = () => {
    setAnswer(parseInt(numberOne) - parseInt(numberTwo))
  }
  
  return (
    <View style={styles.container}>
      <Text>Result: {answer}</Text>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      value={numberOne}
      onChangeText={(val)=> setNumberOne(val)}
      keyboardType='numeric' />

      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      value={numberTwo}
      onChangeText={(val)=> setNumberTwo(val)}      
      keyboardType='numeric' />
      <Button title="+"
      onPress={(i) => sum(i)}/>
      <Button title="-"
      onPress={(i) => minus(i)}/>
      <StatusBar style="auto" />
    </View>
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
