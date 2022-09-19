import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function History5(props) {
    const{ data}= props.route.params

    return (
        <View style={styles.container}>
            <Text>History</Text>
            
            <View style={styles.grid2}>
                <FlatList data={data} renderItem={({item}) => <Text>{item}</Text>}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    },
    grid1: {
    flex: 1/3,
    flexDirection: 'row'
    },
    grid2:{
    flex: 1/3
    },
});
