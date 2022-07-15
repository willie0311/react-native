
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableHighlight, TouchableOpacity,TouchableNativeFeedback,Image,ScrollView,FlatList,SectionList,Switch,Modal, Dimensions,Animated,Clipboard,} from 'react-native';

import { Component } from 'react';
import PropTypes from 'prop-types';


{/*let {height, width} = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
        <Image
          style={{height: height * 0.2, width: width * 0.5}}
          source={require('./ada.jpg')}
        />
    </View>
  );
}*/}


export default class App extends Component{
  

  render(){
      return (
        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={{fontSize: 30}}>1</Text>
          </View>
          <View style={styles.view}>
            <Text style={{fontSize: 30}}>2</Text>
          </View>
          <View style={styles.view}>
            <Text style={{fontSize: 30}}>3</Text>
          </View>
        </View>
      );
  }
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  view: {
    height: 50,
    width: 50,
    margin: 10,
    backgroundColor: 'gray',
  },
  view02: {
    flex: 3,
    backgroundColor: 'white',
  },
  view03: {
    flex: 1,
    backgroundColor: 'black',
  },
  text01: {
    color: '#3f8',
    textAlign: 'center',
    fontSize: 20,
  },
});