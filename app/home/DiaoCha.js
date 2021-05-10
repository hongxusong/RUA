import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TextInput,Dimensions,
  SafeAreaView, Alert, Linking, ImageBackground
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class DiaoCha extends Component {
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
          <View style={{padding:20}}>
              <TouchableOpacity onPress={()=>{

                  this.props.navigation.navigate('Add');

              }}>
                <View style={[styles.box,styles.center]}>
                    <Text style={{fontSize:50,color:'white'}}>Parent</Text>
                </View>
              </TouchableOpacity>
           
            <TouchableOpacity onPress={()=>{
               this.props.navigation.navigate('XueShen');
            }}>
            <View style={[styles.box2,styles.center,{marginTop:10}]}>
           <Text style={{fontSize:50,color:'white'}}>Student</Text>
           </View>
            </TouchableOpacity>
           
         </View>
      </SafeAreaView>
    )
  }
}
export default DiaoCha
const styles = StyleSheet.create({
    center:{
        alignItems:'center',justifyContent:'center'
    },
    box:{
        width:windowWidth*.9,
        height:windowWidth*.9,
        backgroundColor:'#05CAD2',
        borderRadius:10
    },
    box2:{
        width:windowWidth*.9,
        height:windowWidth*.9,
        backgroundColor:'#FFA170',
        borderRadius:10
    },
  btn1:{
    borderColor:'#00C2CC',borderWidth:3, paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFA170',

  },
  pd: {
    padding: 20
  },
  bg: {
    width: '50%',
    height: '25%',
    marginTop:'50%'
  },
  bw: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})