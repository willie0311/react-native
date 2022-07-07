
import { StyleSheet, Text, View,SafeAreaView,TextInput } from 'react-native';
import { Button } from 'react-native-web';

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
        title='按鍵'
        onPress = {() =>{console.log('按鈕測試')}}
      />
    </View>   
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
