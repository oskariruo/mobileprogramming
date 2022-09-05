import {Text, View, Button} from 'react-native';


export default function Home({navigation}) {
    return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Course Assigments</Text>
    <Button title="Assignment 1" onPress={() => navigation.navigate("Assignment 1")}>
    </Button>
    <Button title="Assignment 2" onPress={() => navigation.navigate("Assignment 2")}>
    </Button>
    
    </View>)
      }