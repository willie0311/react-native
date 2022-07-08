import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList ,Switch, Modal,Alert, Dimensions } from 'react-native';


let {height, width} = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
        <Image
          style={{height: height * 0.2, width: width * 0.5}}
          source={require('./assets/123.jpg')}
        />
    </View>
  );
}


{/*export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      show : false,
    };
  }

  render (){
    return (
      <View style = {styles.container}>
        <Button
          title='Alert'
          onPress={() => {
            Alert.alert(
              'title',
              'Hello React Native Alert',
              [
                { text : 'Cancel' , onPress : () => console.log('Cancel')},
                { text : 'Yes' , onPress : () => console.log('Yes')},
                { text : 'No' , onPress : () => console.log('No')},
              ]
            )
          }} 
        />
      </View>
    );
  }
}*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view01: {
    height:100 ,
    width:100 ,
    borderWidth:1
  },
  text01: {
    color: 'red',
  }
});