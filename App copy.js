import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// add 
import React , {Component} from 'react';

{/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>中彰投分屬 跨平台測試 2022/07/01 李宏偉 20號</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/}

// add state
export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
      <Text>中彰投分屬 跨平台測試 2022/07/01 李宏偉 20號</Text>
      <StatusBar style="auto" />
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
});
