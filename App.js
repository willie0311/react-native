import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList ,Switch, Modal } from 'react-native';


//增加npm
import PropTypes from 'prop-types';

import React , {Component} from 'react';


export default class App extends Component {
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
            title='Open'
            onPress={() =>{this.setState({ show:true})}}/>
          <Modal
            animationType='fade'
            visible = {this.state.show}
            onPress = {() => {console.log ('modal show')}}>
              <View style = {{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                <Text style={{fontSize :30 }}>Modal</Text>
                  <Button 
                  title = "close"
                  onPress={ () => {this.setState({show : false})}}/>
              </View>
            </Modal> 
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