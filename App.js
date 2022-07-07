import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView  } from 'react-native';




export default function App() {
  return (
  <SafeAreaView style={styles.container}>
  <View style ={{width:300 , height:400}}>
      <ScrollView>
      <View style = {{backgroundColor:'red',height:300}}>
      </View>
      <Text style= {{fontSize:25}}> This is ScrollView</Text>
      <View style = {{borderWidth:2 ,height:300}}>
      </View>
    </ScrollView>
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