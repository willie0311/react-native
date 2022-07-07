import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback  } from 'react-native';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view01}>
        <Text style={styles.text01}>中彰投</Text>
      </View>
        <View style = {{height:100 , width:200 , borderWidth:1}}>
        <Text style={styles.text01}>2022/07/01 跨平台</Text>
        <TextInput 
          style = {{height:40 , width:180 , borderWidth:2}} placeholder = "請輸入"
          onChange={() =>{ console.log('點擊測試')}}  
      /> 

      
      <Button
        title = "press me."
        onPress= {() => {console.log('onPress')}} 
      />

      </View>   
  
      <TouchableHighlight
        underlayColor ="gray"
        activeOpacity = {0.5}
        onPress = {() =>{console.log('TouchableHighlight')}} >
        <Text>Button</Text>
      </TouchableHighlight>


      <TouchableOpacity
        activeOpacity = {0.5}
        onPress = {() =>{console.log('TouchableOpacity')}} >
        <Text>Button</Text>
      </TouchableOpacity>
      
      <TouchableNativeFeedback
      onPress = {() =>{console.log('TouchableNativeFeedback')}}
      background ={TouchableNativeFeedback.Ripple('gray',true)}
      hitSlop = {{top:10,left:10,bottom:10,right:10}}>
      <View style ={{backgroundColor:'blue'}}>
        <Text style={{margin:30}}>Button</Text>
      </View>
    </TouchableNativeFeedback>

    

    </SafeAreaView>


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