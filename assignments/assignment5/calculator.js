import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState } from 'react';

export default function Calculator5(props) {  
  const [data, setData] = useState([]);
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [answer, setAnswer] = useState('');


  const sum = () => {
    setAnswer(parseInt(numberOne) + parseInt(numberTwo));
    let calc =`${numberOne} + ${numberTwo} = ${parseInt(numberOne) + parseInt(numberTwo)}`;
    setData([...data, calc]);
    setNumberOne('');
    setNumberTwo('');
  }

  const minus = () => {
    setAnswer(parseInt(numberOne) - parseInt(numberTwo));
    let calc =`${numberOne} - ${numberTwo} = ${parseInt(numberOne) - parseInt(numberTwo)}`;
    setData([...data, calc]);
    setNumberOne('');
    setNumberTwo('');
  }

  const{ navigate} = props.navigation;
  
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
      <Button onPress={() => navigate('History', {data})} title="History"/>
      
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
