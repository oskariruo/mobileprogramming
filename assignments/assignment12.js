import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function FirebaseShoppingList() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <Button onPress={addItem} title="Add Item" />
      <Button onPress={() => setData([])} title="Clear"/>
      <Text style={styles.heading}>Shopping list</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
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
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  heading: {
    color: 'blue'
  }
});