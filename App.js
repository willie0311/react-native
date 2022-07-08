import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList  } from 'react-native';

import { Component } from "react";

//自訂義hello
class Hello extends Component {
  render (){
    return (
      <Text>Hello {this.props.title}</Text>
    )
  }
} 

export default function App() {

  return (
    <View style ={styles.container}>
      <Hello title='World' />
      <Hello title='React Native' />
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
  view01: {
    height:100 ,
    width:100 ,
    borderWidth:1
  },
  text01: {
    color: 'red',
  }
});