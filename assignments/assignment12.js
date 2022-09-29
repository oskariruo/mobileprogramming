import {push, ref, onValue, remove } from'firebase/database';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {database} from '../components/config';

export default function FireBaseShoppingList() {

    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState('');
    const [items, setItems] = useState([]);
    const [keys, setKeys] = useState([]);

const updateList = () => {
  const itemsRef = ref(database, 'items/');
  onValue(itemsRef, (snapshot) => {
    if (snapshot.exists()){
    const data = snapshot.val();
    setItems(Object.values(data));
    setKeys(Object.keys(data));
  }
    else{setItems([])
  }
  });
}

useEffect(updateList, []);

  const saveItem = () => {
    push(
      ref(database, 'items/'),
      { 'product': product, 'amount': amount})
      .then(() => {
        console.log('item added');
        updateList();
      })
      }
   

  const deleteItem = (index) => {
    let reference = ref(database, 'items/'+keys.splice(index)[0]);
    remove(
        reference
      ).then(() => {
        console.log('item removed');
        updateList();
      })
    }

    return (
    <View style={styles.container}>
    <TextInput 
    style={styles.input} 
    placeholder='Product' 
    onChangeText={product => setProduct(product)} 
    value={product} 
    />
    <TextInput 
    style={styles.input} 
    placeholder='Amount' 
    onChangeText={amount => setAmount(amount)} 
    value={amount} 
    />
      <Button 
      onPress={saveItem} 
      title="Add Item" 
      />
      <Text style={styles.heading}>Shopping list</Text>
      <FlatList 
        style={styles.list}
        data={items}
        renderItem={({ item, index }) =>
          <View style={styles.listcontainer}>
            <Text style={styles.text}>{item.product}, {item.amount}</Text>
            <Text style={styles.textdelete} onPress={() => deleteItem(index)}> bought</Text>
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