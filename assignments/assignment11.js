import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('shoppingdb.db');

export default function SQLShoppingList() {
    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState('');
    const [data, setData] = useState([]);
  
useEffect(() => {
    db.transaction(tx => {
        tx.executeSql('create table if not exists shopping (id integer primary key not nut, product text, amount text);');
    }, null, updateList
    );
}, []);

    const addItem = () => {
        setData([...data, { key: text }]);
        setText('');
  }

    return (
    <View style={styles.container}>
    <TextInput style={styles.input} placeholder='Product' onChangeText={text => setText(text)} value={text} />
    <TextInput style={styles.input} placeholder='Amount' onChangeText={text => setText(text)} value={text} />
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