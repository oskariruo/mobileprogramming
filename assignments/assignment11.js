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
        tx.executeSql('create table if not exists shopping (id integer primary key not null, product text, amount text);');
    }, null, updateList
    );
}, []);

  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into shopping(product, amount) values (?, ?);', [product, amount]);
    }, null, updateList
    )
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shopping;', [], (_, { rows }) =>
        setData(rows._array)
      ); 
    });
  }

  const deleteItem = (id) => {
    db.transaction(
        tx => {
            tx.executeSql(`delete from shopping where id = ?`, [id]);
        }, null, updateList
    )
  }
    return (
    <View style={styles.container}>
    <TextInput style={styles.input} placeholder='Product' onChangeText={product => setProduct(product)} value={product} />
    <TextInput style={styles.input} placeholder='Amount' onChangeText={amount => setAmount(amount)} value={amount} />
      <Button onPress={saveItem} title="Add Item" />
      <Text style={styles.heading}>Shopping list</Text>
      <FlatList style={styles.list}
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={({ item }) =>
          <View style={styles.listcontainer}>
            <Text style={styles.text}>{item.product}, {item.amount}</Text>
            <Text style={styles.textdelete} onPress={() => deleteItem(item.id)}> bought</Text>
          </View>
        }
      />
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
    borderColor: 'gray',
    borderWidth: 1 
  },
  heading: {
    color: 'blue'
  },
  text: {
    fontSize: 18
  },
  textdelete: {
    fontSize: 18,
    color: '#0000ff'
  },
  listcontainer: {
    marginTop:50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});