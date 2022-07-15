
import { StyleSheet, Text, View, TextInput, Button,  TouchableOpacity} from 'react-native';

import React , { useState } from 'react';




export default function App() {
  const [validCode , setValidCode] = useState('');
  const getNumber = () =>{
    if(validCode === '1234') {
      return <Text style={{color:'yellow'}}>輸入成功</Text>;
    }else {
      return <Text style={{color:'red'}}>密碼錯誤</Text>;
    }
  }
  return (
    <View style={styles.container}>
        <TextInput
        maxLength={4}
        style={{height:50,width:300,borderRadius:0,borderColor:'darkgray',backgroundColor:'white',color:'black',fontSize:28,textAlign:'center'}}
        onChangeText={(text) =>setValidCode(text)}
        keyboardType={'numeric'}
        value={validCode}
        />
        {getNumber()}

        <TouchableOpacity style={{backgroundColor:'#00aeef',borderRadius:20,width:300,height:40,justifyContent:'center',margin:20}}>
          <Text style={{color:'white',textAlign:'center',fontSize:25}}>
          Enter
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'black',
  },
  
});