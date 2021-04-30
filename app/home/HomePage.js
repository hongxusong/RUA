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

class HomePage extends Component {
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
            <Text style={{fontSize:25}}>Hi Charlotte,here`s your week </Text>
          
          <View style={[styles.center,{marginTop:20}]}>
              <Image source={require('../img/icon1.png')} style={styles.icon}/>

              <Image source={require('../img/icon2.png')} style={[styles.icon,{marginTop:20}]}/>
              <Image source={require('../img/icon3.png')} style={[styles.icon,{marginTop:20}]}/>
          </View>

          {/* <View style={styles.btm}>

          </View> */}

          </View>
           <View style={[styles.btm,styles.bw]}>
        <Image source={require('../img/home.png')} resizeMode='contain' style={styles.btm_img}/> 
        <Image source={require('../img/sou.png')} resizeMode='contain' style={styles.btm_img}/> 
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Add');
        }}>
        <Image source={require('../img/add.png')} resizeMode='contain' style={[styles.btm_img,{width:60}]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Chat');
        }}>
        <Image source={require('../img/chat.png')} resizeMode='contain' style={styles.btm_img}/> 
        </TouchableOpacity>
       
        <Image source={require('../img/me.png')} resizeMode='contain' style={styles.btm_img}/>  
          </View>
          

      </SafeAreaView>
    )
  }
}
export default HomePage
const styles = StyleSheet.create({
    btm_img:{
        width:40,
        height:30
    },
    btm:{
     position:'absolute',
     bottom:0,
     borderTopColor:'#F5F5F5',
     borderTopWidth:1,
     width:'100%',
     height:100
    },
    center:{
      alignItems:'center'
    },
    icon:{
     width:200,
     height:200
    },
  bgc:{
   backgroundColor:'white',
   width:'100%',
    height:'100%'
    },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'black',

  },
  pd: {
    padding: 20
  },
  bg: {
    width: '100%',
    height: '80%'
  },
  bw: {
   
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})