import * as Contacts from 'expo-contacts'
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function ContactCollector() {

    const [contacts, setContact] = useState();

    const getContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync(
                { fields: [Contacts.Fields.PhoneNumbers]}
            );
            if (data.length > 0){
                setContact(data);
            }
        }
    }
    return (
        <View style={styles.container}>
          <Button 
          onPress={getContacts} 
          title="GET CONTACTS" 
          />
          <FlatList 
            style={styles.list}
            data={contacts}
            renderItem={({ item }) =>
              <View style={styles.listcontainer}>
                <Text style={styles.text}>{item.name} {item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number}</Text>
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
        listcontainer: {
          marginTop:50,
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center'
        },
      });