import {Text, View, Button} from 'react-native';


export default function Home({navigation}) {
    return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Course Assigments</Text>
    <Button title="Assignment 1" onPress={() => navigation.navigate("Assignment 1")}>
    </Button>
    <Button title="Assignment 2" onPress={() => navigation.navigate("Assignment 2")}>
    </Button>
    <Button title="Assignment 3" onPress={() => navigation.navigate("Assignment 3")}>
    </Button>
    <Button title="Assignment 4" onPress={() => navigation.navigate("Assignment 4")}>
    </Button>
    <Button title="Assignment 5" onPress={() => navigation.navigate("Assignment 5")}>
    </Button>
    <Button title="Assignment 6" onPress={() => navigation.navigate("Assignment 6")}>
    </Button>
    <Button title="Assignment 7" onPress={() => navigation.navigate("Assignment 7")}>
    </Button>
    <Button title="Assignment 8" onPress={() => navigation.navigate("Assignment 8")}>
    </Button>
    <Button title="Assignment 10" onPress={() => navigation.navigate("Assignment 10")}>
    </Button>
    <Button title="Assignment 11" onPress={() => navigation.navigate("Assignment 11")}>
    </Button>
    <Button title="Assignment 12" onPress={() => navigation.navigate("Assignment 12")}>
    </Button>
    <Button title="Assignment 13" onPress={() => navigation.navigate("Assignment 13")}>
    </Button>
    </View>)
      }