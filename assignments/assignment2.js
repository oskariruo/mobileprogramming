import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function GuessingGame({navigation}) {
  const [numberOne, setNumberOne] = useState(0);
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100)+1);
  const [msg, setMsg] = useState("")
  const [counter, setCounter] = useState(1);

  const guess = () => {
    if (numberOne != answer){
      console.log(numberOne)
      console.log(answer)
      setCounter(counter+1);
    if (numberOne < answer){setMsg("Your guess " + numberOne + " is too low")}
    else {setMsg("Your guess " + numberOne + " is too high")}
    }
    else {Alert.alert("You guessed the number in " + counter + " guesses")
    setCounter(1);
    setMsg("");
    setAnswer(Math.floor(Math.random() * 100)+1);
  };
  }
  
  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <Text>{msg}</Text>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      value={numberOne}
      onChangeText={(val)=> setNumberOne(val)}
      keyboardType='numeric' />

      <Button title="MAKE GUESS"
      onPress={i => guess(i)}/>

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
