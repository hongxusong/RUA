import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  SafeAreaView, Alert, Linking, ImageBackground
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Add extends Component {
  static navigationOptions = {
    title: 'HomePage',
  };
  constructor(props) {
    super(props)
    this.state = {

    }

  }


  componentWillMount() {

  }


  componentWillMount() {


  }



  render() {

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
       <View style={[{padding:20},styles.bgc]}>
       <Text style={{fontSize:25}}>What`s  on your mind</Text>
      
       <View style={styles.bw}>
       <View style={styles.btn}>
       <Text>Grades</Text> 
       </View>
       <View style={styles.btn}>
           <Text>
           Relationships
           </Text>
       </View>
       </View>

       <View style={styles.bw}>
       <View style={styles.btn}>
       <Text>Mental Health</Text> 
       </View>
       <View style={styles.btn}>
           <Text>
           other
           </Text>
       </View>
       </View>
       
       <Text style={{fontSize:25,marginTop:30}}>When would you like to talk about it ？</Text>
       
       <View style={styles.bw}>
       <View style={styles.btn}>
       <Text>Now</Text> 
       </View>
       <View style={styles.btn}>
           <Text>
           Soon
           </Text>
       </View>
       </View>
       
       <View style={styles.bw}>
       <View style={styles.btn}>
       <Text>Next week</Text> 
       </View>
       <View >
           
       </View>
       </View>
       
       <TextInput style={styles.note} placeholder='Note to share now'/>

       </View>
      </SafeAreaView>
    )
  }
}
export default Add
const styles = StyleSheet.create({
    note:{
        marginTop:20,
        borderRadius:8,
        borderWidth:3,
        borderColor:'black',
        height:100,
        padding:10
    },
    bgc:{
        backgroundColor:'white',
        width:'100%',
         height:'100%'
         },
  btn: {
   width:'40%',
   borderWidth:3,
   borderColor:'black',
   padding:10,
   borderRadius:20

  },
  pd: {
    padding: 20
  },
  bg: {
    width: '100%',
    height: '80%'
  },
  bw: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})