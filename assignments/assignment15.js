import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Header, Icon, Input, Button, ListItem } from 'react-native-elements';

const db = SQLite.openDatabase('shoppingdb.db');

export default function ElementsShoppingList() {
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
      <View>
      <Header centerComponent={{ text: 'SHOPPING LIST', style: { color: '#fff' } }}/>
  <Input placeholder='Product' label='PRODUCT' onChangeText={product => setProduct(product)} value={product} />
  <Input placeholder='Amount' label='AMOUNT' onChangeText={amount => setAmount(amount)} value={amount} />
    <Button raised icon={{name:'save', color:'white'}} onPress={saveItem} title="SAVE" />
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data}
      renderItem={({ item }) =>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.product}</ListItem.Title>
          <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon
         name='delete' color='red' type='material' onPress={() => deleteItem(item.id)}/>
          
        </ListItem>
      }
    />
  </View>
);
}
