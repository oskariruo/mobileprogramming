import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";

export default function App() {
    const [result, setResult] = useState('0');
    const [amount, setAmount] = useState('');
    const [codes, setCodes] = useState([]);
    const [selectedCode, setSelectedCode] = useState('CHF');
    const eur = "EUR";
    const key = "Kx0PcvCdtWfVCijCd1vfvXWUzz027ypt";

    const fetchCodes = () => {
        let myHeaders = new Headers();
        myHeaders.append("apikey", key);

        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch(`https://api.apilayer.com/exchangerates_data/symbols`, requestOptions)
            .then(response => response.text())
            .then(result => setCodes(Object.keys(JSON.parse(result).symbols)))
            .catch(error => {
                Alert.alert('Error', error);
            });
    }

    const fetchConvert = () => {
        let theHeaders = new Headers();
        theHeaders.append("apikey", key);

        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: theHeaders
        };

        let theAmount = parseFloat(amount);

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${eur}&from=${selectedCode}&amount=${theAmount}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                setResult(JSON.parse(result).result);
            })
            .catch(error => {
                Alert.alert('Error', error);
            });
    }

    useEffect(() => {
        fetchCodes()
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.result}>
                {result} €
            </Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.textInput}
                    keyboardType={"number-pad"}
                    onChangeText={text => setAmount(text)}
                    placeholder={'Amount'}
                />
                <Picker
                    placeholder='CHF'
                    selectedValue={selectedCode}
                    onValueChange={(itemValue) => {
                        setSelectedCode(itemValue);
                    }
                    }
                    style={styles.pickerInput}>
                    {
                        codes.map((code) => <Picker.Item label={code} value={code}/>)
                    }
                </Picker>
            </View>
            <Button title='Convert' onPress={fetchConvert}/>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    result: {
        fontSize: 24

    },
    textInput: {
        fontSize: 18,
        marginBottom: 5,
        minWidth: 100
    },
    pickerInput: {
        fontSize: 18,
        padding: 5,
        minWidth: 100
    },
});