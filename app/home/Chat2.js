import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,Dimensions,
  StyleSheet,Platform,Button,
  ActivityIndicator,TouchableWithoutFeedback,
  TextInput,
  SafeAreaView, Alert, Linking, ImageBackground,KeyboardAvoidingView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const { deviceWidth, deviceHeight } = Dimensions.get('window')
class Chat2 extends Component {
  static navigationOptions = {
    title: 'homepage',
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
      <SafeAreaView style={{ flex: 1, alignItems: 'center',backgroundColor:'white' }}>
        <ScrollView style={{width:'100%'}}>
        <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
     
    >
     <View style={[styles.bw,styles.in_pt]}>
     <TextInput placeholder='Input content' style={{width:'70%',borderColor:'#FFA170',borderWidth:1,padding:5}} placeholderTextColor='red'/>
     <Button title='send'  color="#841584"/>
     </View>

    </KeyboardAvoidingView>
        </ScrollView>
     </SafeAreaView>
    )
  }
}
export default Chat2
const styles = StyleSheet.create({
    in_pt:{
    //    position:'',
    marginTop:700
    
    },
    container: {
        flex: 1
      },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    bn:{
      backgroundColor:'blue',
      color:'white',
      width:50,height:50,borderRadius:25
    },
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
    // width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})