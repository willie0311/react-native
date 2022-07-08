import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList  } from 'react-native';





export default function App() {
  let data01 = [
    { key: '1' , data: 'React'},
    { key: '2' , data: 'React Native'},
    { key: '3' , data: 'JavaScript'}
  ];
  return (
  <View style={styles.container}>
    <View style = {{width: 300 , height: 400}}>
      <FlatList
        data = {data01} renderItem = {({item}) =>(
          <View style = {{ marginTop: 20 , alignItems : 'center'}}>
            <Text>{item.key}</Text>
            <Text>{item.data}</Text>
          </View>
        )}
        style = {{borderWidth:1}} containerContainerStyle = {{alignItems : 'center'}}
        />
    </View>
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