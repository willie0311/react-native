import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList  } from 'react-native';

import { Component } from "react";

//自訂義hello
class Hello extends Component {
  render (){
    return (
      // 一個物件不用View 兩個以上需要View包起來 才能回傳
      <View>
        <Text>title {this.props.title}</Text>
        <Text>name {this.props.name}</Text>
        <Text>id {this.props.id}</Text>
      </View>
    )
  }
} 

export default function App() {

  return (
    <View style ={styles.container}>
      <Hello title='World' name="User" id='20220708'/>
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