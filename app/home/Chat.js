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

class Chat extends Component {
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
       <Text style={{fontSize:25}}>How do you prefer to talk ?</Text>
      
       <View style={styles.bw}>
       <View style={styles.btn}>
       <Text>phone call</Text> 
       </View>
       <View style={styles.btn}>
           <Text>
           video call
           </Text>
       </View>
       </View>

       <View style={styles.bw}>
       <View style={styles.btn}>
       <Text>texting </Text> 
       </View>
       <View style={styles.btn}>
           <Text>
           email
           </Text>
       </View>
       </View>
       
       <Text style={{fontSize:25,marginTop:30}}>How many time a week would you like to  ？</Text>
       
       <View style={[styles.bw,{flexWrap:'wrap'}]}>
       <View style={[styles.btn,{width:'100%',marginTop:20}]}>
       <Text>call home                                   6</Text> 
       </View>
       <View style={[styles.btn,{width:'100%',marginTop:20}]}>
       <Text>video call home                             6</Text>
       </View>
       <View style={[styles.btn,{width:'100%',marginTop:20}]}>
       <Text>text parents                                20</Text> 
       </View>
       <View style={[styles.btn,{width:'100%',marginTop:20}]}>
       <Text>email parents                               20</Text> 
       </View>
       
       </View>
       
       <Text style={{fontSize:25}}>What day are you busy ?</Text>
       
       <View style={styles.bw}>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
           <View style={[styles.bn,styles.center]}>
               <Text style={{color:'white'}}>M</Text>
           </View>
       </View>

       <View style={{marginTop:10,borderRadius:6,borderColor:'black',borderWidth:2,padding:20,alignItems:'center',
      
    }}>
          <Text style={{color:'blue',fontSize:30}}>Submit</Text> 
       </View>
     
       </View>
      </SafeAreaView>
    )
  }
}
export default Chat
const styles = StyleSheet.create({
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
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})