import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native';
import Mapview, { Marker } from 'react-native-maps'

export default function ModifiedMap(){

    const key= "YQArfeZ6vUbfN2xDe9A1Trk0f8PlcrKD";

    const [adress, setAddress] = useState('');
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
        .then(responseJson => { setRegion({
            latitude: responseJson.results[0].geometry.location.lat,
            longitude: responseJson.results[0].geometry.location.lng,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221
          })
        })
        .catch((e) => { Alert.alert('Error', e);
    });

    return (
        <View>
            <Mapview
            region={region}>
                <Marker
                coordinate={{
                    latitude: region.latitude,
                    longitude:region.longitude}}
                    title={input}/>
            </Mapview>
            <TextInput
            value={address}
            placeholder="Enter address"
            onChangeText={(address) => setAddress(address)}/>
            <Button title='SHOW' onPress={getMap}/>
        </View>
    )
    }
}