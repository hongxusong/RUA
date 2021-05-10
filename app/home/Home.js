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

class Home extends Component {
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

        <Image source={require('../img/bg2.png')} style={styles.bg} />

        <View style={[styles.bw,{marginTop:'40%'}]}>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Login')
          }}>
            <View style={styles.btn1}>
              <Text style={{ color: '#00C2CC' }}>LOG IN</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Reg')
          }}>
            <View style={styles.btn}>
              <Text style={{ color: 'white' }}>REGISTER</Text>
            </View>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    )
  }
}
export default Home
const styles = StyleSheet.create({
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