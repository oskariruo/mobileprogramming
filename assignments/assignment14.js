import {useState} from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function SpeechApp() {
const[words, setWords] = useState('');

  const speak = () => {
    Speech.speak(words);
  };

  return (
    <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder='speech'
        onChangeText={text => setWords(text)}/>
      <Button title="press to hear text" onPress={speak} />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    input: {
      marginTop: 5,
      marginBottom: 5,
      width: 200,
      height: 100,
      borderColor: 'gray',
      borderWidth: 1 
    },
    heading: {
      color: 'blue'
    },
    text: {
      fontSize: 18
    },
  });