import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Image, ScrollView , FlatList ,SectionList  } from 'react-native';


export default function App() {
  var data01 = [
    { title: 'Title1', data: ['item1','item2']},
    { title: 'Title2', data: ['item3','item4']},
    { title: 'Title3', data: ['item5','item6']},
  ];
  return (
    <View style={styles.container}>
      <View style={{width: 300, height: 400}}>
        <SectionList
          renderItem={({ item, index, section}) => (
            <Text key={index}>{item}</Text>
          )}
          renderSectionHeader={
            ({section: {title} }) =>(
              <View
                style={{backgroundColor: 'black',
                marginTop:20
              }}>
                <Text style={{ color: "white"}}>
                {title}
                </Text>
              </View>
            )}
          sections={data01}
          keyExtractor={(item, index) => item + index}  
        />
        <SectionList
          renderItem={({ item, index, section}) => (
            <Text key={index}>{item}</Text>
          )}
          renderSectionHeader={
            ({section: {title} }) =>(
              <View
                style={{backgroundColor: 'black',
                marginTop:20
              }}>
                <Text style={{ color: "white"}}>
                {title}
                </Text>
              </View>
            )}
          sections={data01}
          keyExtractor={(item, index) => item + index}  
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