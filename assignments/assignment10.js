import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native';
import Mapview, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';

export default function ModifiedMap() {
    const latitudeDelta= 0.0322;
    const longitudeDelta= 0.0221;
    const key= "YQArfeZ6vUbfN2xDe9A1Trk0f8PlcrKD";

    const [input, setInput] = useState('Haaga-Helia');
    const [region, setRegion] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
    });

    const getMap = () => {
        fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${input}`)
        .then((response) => response.json())
        .then(data => {
            location = data.results[0].locations[0]

            setRegion({
                latitude: location.latLng.lat,
                longitude: location.latLng.lng,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
          });
        })
        .catch((e) => { Alert.alert('Error', e);
    });
    }

    useEffect(() => {
      (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('No permission to get location')
                return;    
            }
            let location = await Location.getCurrentPositionAsync({});

            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                longitudeDelta: longitudeDelta,
                latitudeDelta: latitudeDelta
            }) 
            })();
        }, []);

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