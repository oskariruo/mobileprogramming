import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native';
import Mapview, { Marker } from 'react-native-maps'

export default function Map() {

    const key= "YQArfeZ6vUbfN2xDe9A1Trk0f8PlcrKD";

    const [input, setInput] = useState('Haaga-Helia');
    const [region, setRegion] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    });

    const getMap = () => {
        const url = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${input}`;
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            location = data.results[0].locations[0]

            setRegion({
                latitude: location.latLng.lat,
                longitude: location.latLng.lng,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221
          });
        })
        .catch((e) => { Alert.alert('Error', e);
    });
    }
    return (
        <View style={styles.container}>
            <Mapview
            style={{flex: 1, height: '100%', width: '100%'}}
            region={region}>
                <Marker
                coordinate={{
                    latitude: region.latitude,
                    longitude:region.longitude}}
                    title={input}/>
            </Mapview>
            <TextInput
            value={input}
            placeholder="Enter address"
            onChangeText={(input) => setInput(input)}/>
            <Button title='SHOW' onPress={getMap}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });