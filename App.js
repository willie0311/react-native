import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList ,Switch } from 'react-native';


//增加npm
import PropTypes from 'prop-types';

import React , {Component} from 'react';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      value : false,
    };
  }

  render (){
    return (
      <View style = {styles.container}>
        <Text style = {{fontSize :25}}>Switch </Text>
        <Switch
          // disabled = {true} 
          value = {this.state.value}
          onValueChange = {(data) => this.setState({ value: data})}

        />
      </View>
    );
  }
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