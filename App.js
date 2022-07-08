import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList  } from 'react-native';


//增加npm
import PropTypes from 'prop-types';

import React , {Component} from 'react';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      myState : 'My First State',
      myWorld : 'World',
    };
  }
  // add 觸發事件
  changeText1(){
    this.setState({
      myState : 'willie',
      myWorld : '9999'
    })
  }
  // add 觸發事件
  changeText2(){
    this.setState({
      myState : 'abby',
      myWorld : '8888'
    })
  }

  render (){
    return (
      <View style = {styles.container}>
        <Text> Hello {this.state.myState}</Text>
        <Text> Hello {this.state.myWorld}</Text>
        <Button
          title = "chang1"
          onPress={() => this.changeText1()}
        />
        <Button
          title = "chang2"
          onPress={() => this.changeText2()}
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