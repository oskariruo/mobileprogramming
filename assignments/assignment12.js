import {push, ref, onValue, remove } from'firebase/database';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {database} from '../components/config';

export default function FireBaseShoppingList() {

    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState('');
    const [items, setItems] = useState([]);

useEffect(() => {
  const itemsRef = ref(database, 'items/');
  onValue(itemsRef, (snapshot) => {
    const data = snapshot.val();
    setItems(Object.values(data))
  })
}, []);

  const saveItem = () => {
    push(
      ref(database, 'items/'),
      { 'product': product, 'amount': amount})
      .then( ()=> {alert('update success')})
      .then(setProduct(''), setAmount(''))
      .catch((error) => {alert(error);
      });
   }

  const deleteItem = async (id) => {
   remove(
    ref(database, 'items/' + id)
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
        data={items}
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