import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput, FlatList, Image } from 'react-native';

export default function RecipeFinder() {
    const [recipes, setRecipes] = useState([]);
    const [ingredient, setIngredient] = useState('');

    const getRecipes = () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setRecipes(data.meals);
        })
        .catch((error) => {
            Alert.alert('Error: ', error);
        });
    }
    const listSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#CED0CE",
              marginLeft: "10%"
            }}
          />
        );
      };
    
      return (
        <View style={styles.container}>
          <FlatList 
            style={{marginLeft : "5%"}}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({item}) =>
            <View>
              <Text>{item.strMeal}</Text>
              <Image
                style={{width: 100, height:100, margin: 10}} 
                source={{uri: item.strMealThumb}} />
            </View>} 
            ItemSeparatorComponent={listSeparator}
            data={recipes} 
          />
          <TextInput 
            style={{fontSize: 18, width: 200}} 
            value={ingredient} 
            placeholder="Ingredient"
            onChangeText={(ingredient) => setIngredient(ingredient)} 
          />
         <Button title="Find" onPress={getRecipes} />
        </View>
      );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });